const { Router } = require('express')
const {
  createProfessional,
  deleteProfessional,
  getProfessional,
  updateProfessional
} = require('../../controllers/professional.controller')

const router = Router()

router.get('/', getProfessional)

router.post('/', createProfessional)

router.put('/:id', updateProfessional)

router.delete('/:id', deleteProfessional)

module.exports = router
