const { apiSuccessResponse } = require('../utils/api.utils')
const { STATUS } = require('../utils/constants/httpStatus.constant')
const { getContactMessageByIdService, createContactMessageService, deleteContactMessageService } = require('../services/contactMessage/contactMessage.service')

const getContactMessageById = async (req, res, next) => {
  try {
    const { id } = req.params
    const contactMessage = await getContactMessageByIdService(id)
    const response = apiSuccessResponse(contactMessage, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const createContactMessage = async (req, res, next) => {
  try {
    const { email, message, name, phone } = req.body
    const createdContactMessage = await createContactMessageService({ email, message, name, phone })
    const response = apiSuccessResponse(createdContactMessage, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const deleteContactMessage = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedContactMessageRes = await deleteContactMessageService(id)
    const response = apiSuccessResponse(deletedContactMessageRes, STATUS.OK)
    return res.status(STATUS.OK).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createContactMessage,
  deleteContactMessage,
  getContactMessageById
}
