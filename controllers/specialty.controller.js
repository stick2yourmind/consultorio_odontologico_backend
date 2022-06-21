const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const {
  createSpecialtyService,
  deleteSpecialtyService,
  getSpecialtiesService,
  updateSpecialtyService
} = require('../services/specialty/specialty.service')

const getSpecialty = async (req, res, next) => {
  try {
    const specialties = await getSpecialtiesService()
    const response = apiSuccessResponse(specialties, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const createSpecialty = async (req, res, next) => {
  try {
    const { description, img, imgSvg, specialty, summary } = req.body
    const createdSpecialty = await createSpecialtyService({ description, img, imgSvg, specialty, summary })
    const response = apiSuccessResponse(createdSpecialty, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const updateSpecialty = async (req, res, next) => {
  try {
    const { id } = req.params
    const { description, img, imgSvg, specialty, summary } = req.body
    const updatedSpecialty = await updateSpecialtyService(id, { description, img, imgSvg, specialty, summary })
    const response = apiSuccessResponse(updatedSpecialty, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const deleteSpecialty = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedSpecialty = await deleteSpecialtyService(id)
    const response = apiSuccessResponse(deletedSpecialty, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createSpecialty,
  deleteSpecialty,
  getSpecialty,
  updateSpecialty
}
