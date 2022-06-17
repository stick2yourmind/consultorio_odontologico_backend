const { apiFailedResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')

const notFoundMiddleware = (req, res, next) => {
  const status = STATUS.NOT_FOUND
  const errorItem = {
    message: 'Resource not found',
    details: `${req.method}: ${req.baseUrl}${req.path}`
  }
  const errorResponse = apiFailedResponse(errorItem, status)
  return res.status(status).json(errorResponse)
}

module.exports = notFoundMiddleware
