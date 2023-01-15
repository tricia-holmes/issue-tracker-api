const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./routes/routes')

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
