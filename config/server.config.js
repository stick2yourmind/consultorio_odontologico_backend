require('dotenv').config()

const CONFIG = {
  ALLOWED_ORIGINS: [
    'http://127.0.0.1:5500',
    'http://localhost:3500',
    'http://localhost:3000'
  ],
  HOST: process.env.HOST,
  PORT: process.env.PORT
}
module.exports = CONFIG
