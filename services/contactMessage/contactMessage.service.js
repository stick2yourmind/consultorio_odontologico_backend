const DaosFactory = require('../../models/daos/factory.daos')
const CustomError = require('../../utils/errors/customError')
const { STATUS } = require('../../utils/constants/httpStatus.constant')
const pug = require('pug')
const path = require('path')
const { mailOptions, transporter } = require('../../utils/email/email.utils')

const ContactMessageDao = DaosFactory.getDaos('contactPage').ContactMessageDao

const getAllContactMessagesService = async () => {
  try {
    const contactMessage = await ContactMessageDao.getAll()
    return contactMessage
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to get all contact messages',
      error
    )
  }
}

const getContactMessageByIdService = async (id) => {
  try {
    const contactMessage = await ContactMessageDao.getById(id)
    return contactMessage
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      `Error occurred on service while trying to get a contact message by its id:\n${id}`,
      error
    )
  }
}

const createContactMessageService = async (payload) => {
  try {
    const contactMessageCreated = await ContactMessageDao.create(payload)
    const subject = 'Mensaje de contacto recibido'
    const html = pug.renderFile(path.join(__dirname, '../../views/email/confirmContactMessage.view.pug'), payload)
    await transporter.sendMail(mailOptions(payload.email, subject, html), function (err, info) {
      if (err) { console.log(err) } else console.log(info)
    })
    return contactMessageCreated
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      'Error occurred on service while trying to create a contact message',
      error
    )
  }
}

const deleteContactMessageService = async (id) => {
  try {
    const deletedMessageRes = await ContactMessageDao.deleteById(id)
    return deletedMessageRes
  } catch (error) {
    throw new CustomError(
      STATUS.SERVER_ERROR,
      `Error occurred on service while trying to delete a contact message by its id:\n${id}`,
      error
    )
  }
}

module.exports = { createContactMessageService, deleteContactMessageService, getAllContactMessagesService, getContactMessageByIdService }
