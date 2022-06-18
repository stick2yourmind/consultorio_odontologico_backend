const { apiFailedResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const { warnLogger } = require('../utils/logger/config.logger')

const notFoundMiddleware = (req, res, next) => {
  const status = STATUS.NOT_FOUND
  const errorItem = {
    details: `${req.method}: ${req.baseUrl}${req.path}`,
    message: 'Resource not found'
  }
  warnLogger.error(errorItem)
  const errorResponse = apiFailedResponse(errorItem, status)
  return res.status(status).json(errorResponse)
}

module.exports = notFoundMiddleware
