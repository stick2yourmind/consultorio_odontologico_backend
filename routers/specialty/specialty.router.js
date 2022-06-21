const { Router } = require('express')
const {
  createSpecialty,
  deleteSpecialty,
  getSpecialty,
  updateSpecialty
} = require('../../controllers/specialty.controller')

const router = Router()

router.get('/', getSpecialty)

router.post('/', createSpecialty)

router.put('/:id', updateSpecialty)

router.delete('/:id', deleteSpecialty)

module.exports = router
