const { Router } = require('express')
const {
  createContactMessage,
  deleteContactMessage,
  getContactMessageById,
  getAllContactMessages
} = require('../../controllers/contactMessage.controller')

const router = Router()

router.get('/', getAllContactMessages)

router.get('/:id', getContactMessageById)

router.post('/', createContactMessage)

router.delete('/:id', deleteContactMessage)

module.exports = router
