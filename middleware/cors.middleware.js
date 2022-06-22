const CONFIG = require('../config/server.config')

const credentials = (req, res, next) => {
  const origin = req.headers.origin
  if (CONFIG.ALLOWED_ORIGINS.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true)
  }
  next()
}

module.exports = credentials
