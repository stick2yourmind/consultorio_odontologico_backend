const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')

const getAvailableAppointments = async (req, res, next) => {
  try {
    const posts = await String('All appointments')
    const response = apiSuccessResponse(posts, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const makeAppointment = async (req, res, next) => {
  try {
    const posts = await String('makeAppointment')
    const response = apiSuccessResponse(posts, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const cancelAppointment = async (req, res, next) => {
  try {
    const posts = await String('cancelAppointment')
    const response = apiSuccessResponse(posts, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAvailableAppointments,
  makeAppointment,
  cancelAppointment
}
