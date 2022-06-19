const DaosFactory = require('../../models/daos/factory.daos')
const CustomError = require('../../utils/errors/customError')
const { STATUS } = require('../../utils/constants/httpStatus.constant')
const { isMissingValue } = require('../../utils/appointments/appointment.utils')

const AppointmentDao = DaosFactory.getDaos('appointment').AppointmentDao

const createEmptyAppointmentService = async (dateArray) => {
  try {
    await Promise.all(dateArray.map(async (date) => {
      await AppointmentDao.create({ date })
    })
    )
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to create an empty appointment',
      error
    )
  }
}

const getAppointmentsService = async () => {
  try {
    const appointments = await AppointmentDao.getAvailableAppointments()
    return appointments
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to get available appointments',
      error
    )
  }
}

const makeAppointmentService = async (id, payload) => {
  try {
    const isValid = !isMissingValue(payload)
    if (isValid) {
      const appointmentScheduled = await AppointmentDao.updateById(id, { ...payload, reserved: true })
      return appointmentScheduled
    }
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to get available appointments',
      error
    )
  }
}

module.exports = { createEmptyAppointmentService, getAppointmentsService, makeAppointmentService }
