const dotenv = require('dotenv')

dotenv.config()

const env = {
  PORT: Number(process.env.PORT) || 5000,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
}

module.exports = { env }
