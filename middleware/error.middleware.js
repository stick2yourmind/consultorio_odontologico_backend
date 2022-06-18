const { apiFailedResponse } = require('../utils/api.utils')
const { errorLogger } = require('../utils/logger/config.logger')

const errorMiddleware = (error, req, res, next) => {
  console.log('errorMiddleware')
  console.log(error)
  const status = error.status || 500
  const errorItem = {
    details: error.details,
    message: error.message
  }
  errorLogger.error(error)
  const errorResponse = apiFailedResponse(errorItem, status)
  return res.status(status).json(errorResponse)
}

module.exports = errorMiddleware
