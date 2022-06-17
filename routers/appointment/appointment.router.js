const { Router } = require('express')
const {
  makeAppointment,
  cancelAppointment,
  getAvailableAppointments
} = require('../../controllers/appointments.controller')

const router = Router()

// Routes at <HOST>:<PORT>/api/order-cart
router.get('/', getAvailableAppointments)

router.post('/', makeAppointment)

router.delete('/:id', cancelAppointment)

module.exports = router
