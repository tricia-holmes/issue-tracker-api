const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/project', async (req, res) => {
  const tickets = await db('tickets').select()
  res.status(200).json(tickets)
})

module.exports = router
