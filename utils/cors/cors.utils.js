const CONFIG = require('../../config/server.config')

const corsOptions = {
  optionsSuccessStatus: 200,
  origin: (origin, callback) => {
    if (CONFIG.ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = corsOptions
