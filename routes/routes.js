const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/tickets', async (req, res) => {
  try {
    const tickets = await db('tickets').select().orderBy('id')
    res.status(200).json(tickets)
  } catch (err) {
    res.status(500).json({ message: 'Error getting tickets', error: err })
  }
})

router.post('/tickets', async (req, res) => {
  try {
    const { title, description, status } = req.body
    const newTicket = { title, description, status }
    const createdTicket = await db('tickets').insert(newTicket).returning(['id', 'title', 'description', 'status'])
    res.status(201).json(createdTicket)
  } catch (err) {
    res.status(500).json({ message: 'Error creating ticket', error: err })
  }
})

router.put('/tickets/:id', async (req, res) => {
  try {
    const { title, description, status } = req.body
    const ticket = await db('tickets')
      .where({ id: req.params.id })
      .update({ title, description, status })
      .returning(['id', 'title', 'description', 'status'])

    if (!ticket.length) {
      res.status(400)
      return res.json({ message: 'Ticket not found' })
    }

    res.status(200).json(ticket)
  } catch (err) {
    res.status(500).json({ message: 'Error updating ticket', error: err })
  }
})

module.exports = router
