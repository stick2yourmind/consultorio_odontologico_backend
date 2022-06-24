const DaosFactory = require('../../models/daos/factory.daos')
const CustomError = require('../../utils/errors/customError')
const { STATUS } = require('../../utils/constants/httpStatus.constant')
const { isMissingValue } = require('../../utils/appointments/appointment.utils')
const pug = require('pug')
const path = require('path')
const { formatDate } = require('../../utils/appointments/appointment.utils')
const { mailOptions, transporter } = require('../../utils/email/email.utils')

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
      const { date } = await AppointmentDao.getById(id)
      const { specialtyId: { summary: especialty } } = await AppointmentDao.getById(id, 'specialtyId', 'summary')
      const { professionalId: { name: professionalName, img: professionalImg } } = await AppointmentDao.getById(id, 'professionalId', ['name', 'img'])
      const dateFormatted = formatDate(date)
      const subject = `Turno de ${especialty} confirmado`
      const html = pug.renderFile(path.join(__dirname, '../../views/email/confirmAppointment.view.pug'), {
        clientName: payload.user.fullName,
        dateFormatted,
        especialty,
        professionalImg,
        professionalName
      })
      await transporter.sendMail(mailOptions(payload.user.email, subject, html), function (err, info) {
        if (err) { console.log(err) } else console.log(info)
      })
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
