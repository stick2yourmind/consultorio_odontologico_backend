const { Router } = require('express')
const {
  makeAppointment,
  cancelAppointment,
  getAppointments,
  createEmptyAppointment
} = require('../../controllers/appointments.controller')

const router = Router()

router.get('/', getAppointments)

router.post('/', createEmptyAppointment)

router.put('/:id', makeAppointment)

router.delete('/:id', cancelAppointment)

module.exports = router
