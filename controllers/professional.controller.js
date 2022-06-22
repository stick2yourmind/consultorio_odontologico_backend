const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const {
  createProfessionalService, deleteProfessionalService, getProfessionalsService,
  updateProfessionalService, getProfessionalsByCatergoryService
} = require('../services/professional/professional.service')

const getProfessional = async (req, res, next) => {
  try {
    const professionals = await getProfessionalsService()
    const response = apiSuccessResponse(professionals, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const getProfessionalBySpecialty = async (req, res, next) => {
  try {
    const { id } = req.params
    const professionals = await getProfessionalsByCatergoryService(id)
    const response = apiSuccessResponse(professionals, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const createProfessional = async (req, res, next) => {
  try {
    const { img, name, specialtyId } = req.body
    const createdProfessional = await createProfessionalService({ img, name, specialtyId })
    const response = apiSuccessResponse(createdProfessional, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const updateProfessional = async (req, res, next) => {
  try {
    const { id } = req.params
    const { img, name, specialtyId } = req.body
    const updatedProfessional = await updateProfessionalService(id, { img, name, specialtyId })
    const response = apiSuccessResponse(updatedProfessional, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const deleteProfessional = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedProfessional = await deleteProfessionalService(id)
    const response = apiSuccessResponse(deletedProfessional, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createProfessional,
  deleteProfessional,
  getProfessional,
  getProfessionalBySpecialty,
  updateProfessional
}
