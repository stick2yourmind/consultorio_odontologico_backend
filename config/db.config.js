require('dotenv').config()

const DB_CFG = {
  MONGO: {
    OPTIONS: null,
    URI: process.env.MONGO_URI
  }
}

module.exports = DB_CFG
