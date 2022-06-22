const DaosFactory = require('../../models/daos/factory.daos')
const CustomError = require('../../utils/errors/customError')
const { STATUS } = require('../../utils/constants/httpStatus.constant')

const ProfessionalDao = DaosFactory.getDaos('professional').ProfessionalDao

const createProfessionalService = async (professional) => {
  try {
    const createdProfessional = await ProfessionalDao.create(professional)
    return createdProfessional
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to create a professional',
      error
    )
  }
}

const getProfessionalsByCatergoryService = async (id) => {
  try {
    const professionals = await ProfessionalDao.getBy('specialtyId', id)
    return professionals
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to get all professionals',
      error
    )
  }
}

const getProfessionalsService = async () => {
  try {
    const professionals = await ProfessionalDao.getAll()
    return professionals
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to get all professionals',
      error
    )
  }
}

const updateProfessionalService = async (id, payload) => {
  try {
    const updatedProfessional = await ProfessionalDao.updateById(id, payload)
    return updatedProfessional
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to update professional',
      error
    )
  }
}

const deleteProfessionalService = async (id) => {
  try {
    const deletedProfessional = await ProfessionalDao.deleteById(id)
    return deletedProfessional
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to delete a professional',
      error
    )
  }
}

module.exports = {
  createProfessionalService,
  deleteProfessionalService,
  getProfessionalsByCatergoryService,
  getProfessionalsService,
  updateProfessionalService
}
