const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const { createEmptyAppointmentService, getAppointmentsService, makeAppointmentService } = require('../services/appointment/appointment.service')

const getSpecialties = async (req, res, next) => {
  try {
    const appointments = await getAppointmentsService()
    const response = apiSuccessResponse(appointments, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const createSpecialty = async (req, res, next) => {
  try {
    const { date } = req.body
    const emptyAppointment = await createEmptyAppointmentService(date)
    const response = apiSuccessResponse(emptyAppointment, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const updateSpecialty = async (req, res, next) => {
  try {
    const { id } = req.params
    const { user, professional, specialty } = req.body
    const appointment = await makeAppointmentService(id, { professional, specialty, user })
    const response = apiSuccessResponse(appointment, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const deleteSpecialty = async (req, res, next) => {
  try {
    const appointment = await String('cancelAppointment')
    const response = apiSuccessResponse(appointment, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createSpecialty,
  deleteSpecialty,
  getSpecialties,
  updateSpecialty
}
