const DaosFactory = require('../../models/daos/factory.daos')
const CustomError = require('../../utils/errors/customError')
const { STATUS } = require('../../utils/constants/httpStatus.constant')

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

module.exports = { createEmptyAppointmentService }
