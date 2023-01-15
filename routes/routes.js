const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/tickets', async (req, res) => {
  try {
    const tickets = await db('tickets').select()
    res.status(200).json(tickets)
  } catch (err) {
    res.status(500).json({ message: 'Error creating ticket', error: err })
  }
})

router.post('/add-ticket', async (req, res) => {
  try {
    const { title, description, status } = req.body
    const newTicket = { title, description, status }
    const createdTicket = await db('tickets').insert(newTicket).returning(['id', 'title', 'description', 'status'])
    res.status(201).json(createdTicket)
  } catch (err) {
    res.status(500).json({ message: 'Error creating ticket', error: err })
  }
})

module.exports = router
