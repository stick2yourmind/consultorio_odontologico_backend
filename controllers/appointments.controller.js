const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const { createEmptyAppointmentService } = require('../services/appointment/appointment.service')

const getAvailableAppointments = async (req, res, next) => {
  try {
    const posts = await String('All appointments')
    const response = apiSuccessResponse(posts, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const createEmptyAppointment = async (req, res, next) => {
  try {
    const { date } = req.body
    const posts = await createEmptyAppointmentService(date)
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
  cancelAppointment,
  createEmptyAppointment,
  getAvailableAppointments,
  makeAppointment
}
