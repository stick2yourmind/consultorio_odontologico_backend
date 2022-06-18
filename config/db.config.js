require('dotenv').config()

const DB_CFG = {
  MONGO: {
    OPTIONS: null,
    URI: process.env.MONGO_URI || 'mongodb://localhost:27017/consultorio_mini'
  }
}

module.exports = DB_CFG
