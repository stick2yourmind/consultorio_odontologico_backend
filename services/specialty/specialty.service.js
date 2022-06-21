const DaosFactory = require('../../models/daos/factory.daos')
const CustomError = require('../../utils/errors/customError')
const { STATUS } = require('../../utils/constants/httpStatus.constant')

const SpecialtyDao = DaosFactory.getDaos('specialty').SpecialtyDao

const createSpecialtyService = async (specialty) => {
  try {
    console.log(specialty)
    const createdSpecialty = await SpecialtyDao.create(specialty)
    return createdSpecialty
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to create a specialty',
      error
    )
  }
}

const getSpecialtiesService = async () => {
  try {
    const specialties = await SpecialtyDao.getAll()
    return specialties
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to get all specialties',
      error
    )
  }
}

const updateSpecialtyService = async (id, payload) => {
  try {
    const updatedSpecialty = await SpecialtyDao.updateById(id, payload)
    return updatedSpecialty
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to update specialty',
      error
    )
  }
}

const deleteSpecialtyService = async (id) => {
  try {
    const deletedSpecialty = await SpecialtyDao.deleteById(id)
    return deletedSpecialty
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to delete a specialty',
      error
    )
  }
}

module.exports = {
  createSpecialtyService,
  deleteSpecialtyService,
  getSpecialtiesService,
  updateSpecialtyService
}
