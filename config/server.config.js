require('dotenv').config()

const CONFIG = {
  ALLOWED_ORIGINS: [
    'http://127.0.0.1:5500',
    'http://localhost:4173',
    'http://localhost:3000',
    'https://consultorio-odontologico-j760suz9u-stick2yourmind.vercel.app',
    'https://consultorio-odontologico.vercel.app',
    process.env.ALLOWED_ORIGINS
  ],
  HOST: process.env.HOST,
  PORT: process.env.PORT
}
module.exports = CONFIG
