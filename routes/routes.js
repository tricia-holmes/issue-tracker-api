const express = require('express')

const router = express.Router()

router.get('/project', async (req, res) => {
  res.send('you made a request, cool I guess')
})


module.exports = router