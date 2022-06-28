const { Router } = require('express')
const {
  createContactMessage,
  deleteContactMessage,
  getContactMessage
} = require('../../controllers/contactMessage.controller')

const router = Router()

router.get('/', getContactMessage)

router.post('/', createContactMessage)

router.delete('/:id', deleteContactMessage)

module.exports = router
