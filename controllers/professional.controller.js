const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const {
  createProfessionalService, deleteProfessionalService, getProfessionalsService,
  updateProfessionalService
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

const createProfessional = async (req, res, next) => {
  try {
    const { img, name, specialty } = req.body
    const createdProfessional = await createProfessionalService({ img, name, specialty })
    const response = apiSuccessResponse(createdProfessional, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const updateProfessional = async (req, res, next) => {
  try {
    const { id } = req.params
    const { img, name, specialty } = req.body
    const updatedProfessional = await updateProfessionalService(id, { img, name, specialty })
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
  updateProfessional
}