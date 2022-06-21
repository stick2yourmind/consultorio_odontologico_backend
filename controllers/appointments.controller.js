const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const { createEmptyAppointmentService, getAppointmentsService, makeAppointmentService } = require('../services/appointment/appointment.service')

const getAppointments = async (req, res, next) => {
  try {
    const appointments = await getAppointmentsService()
    const response = apiSuccessResponse(appointments, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const createEmptyAppointment = async (req, res, next) => {
  try {
    const { date } = req.body
    const emptyAppointment = await createEmptyAppointmentService(date)
    const response = apiSuccessResponse(emptyAppointment, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const makeAppointment = async (req, res, next) => {
  try {
    const { id } = req.params
    const { user, professionalId, specialtyId } = req.body
    const appointment = await makeAppointmentService(id, { professionalId, specialtyId, user })
    const response = apiSuccessResponse(appointment, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const cancelAppointment = async (req, res, next) => {
  try {
    const appointment = await String('cancelAppointment')
    const response = apiSuccessResponse(appointment, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  cancelAppointment,
  createEmptyAppointment,
  getAppointments,
  makeAppointment
}
