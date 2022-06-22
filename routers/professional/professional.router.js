const { Router } = require('express')
const {
  createProfessional,
  deleteProfessional,
  getProfessional,
  updateProfessional,
  getProfessionalBySpecialty
} = require('../../controllers/professional.controller')

const router = Router()

router.get('/', getProfessional)

router.get('/:id', getProfessionalBySpecialty)

router.post('/', createProfessional)

router.put('/:id', updateProfessional)

router.delete('/:id', deleteProfessional)

module.exports = router
