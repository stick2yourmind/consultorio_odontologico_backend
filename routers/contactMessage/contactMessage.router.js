const { Router } = require('express')
const {
  createContactMessage,
  deleteContactMessage,
  getContactMessageById
} = require('../../controllers/contactMessage.controller')

const router = Router()

router.get('/:id', getContactMessageById)

router.post('/', createContactMessage)

router.delete('/:id', deleteContactMessage)

module.exports = router
