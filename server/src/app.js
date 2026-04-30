const cors = require('cors')
const express = require('express')
const { env } = require('./config/env')
const { healthRouter } = require('./routes/health.route')

const app = express()

app.use(
  cors({
    origin: env.CLIENT_ORIGIN,
  }),
)
app.use(express.json())
app.use('/api', healthRouter)

module.exports = { app }
