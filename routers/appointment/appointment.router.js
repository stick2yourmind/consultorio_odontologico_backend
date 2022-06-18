const { Router } = require('express')
const {
  makeAppointment,
  cancelAppointment,
  getAvailableAppointments,
  createEmptyAppointment
} = require('../../controllers/appointments.controller')

const router = Router()

router.get('/', getAvailableAppointments)

router.post('/', createEmptyAppointment)

router.put('/:id', makeAppointment)

router.delete('/:id', cancelAppointment)

module.exports = router
