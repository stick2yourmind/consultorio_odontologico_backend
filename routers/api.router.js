const { Router } = require('express')
const appointmentRoutes = require('./appointment/appointment.router')

const router = Router()

// Routes
router.use('/appointments', appointmentRoutes)

module.exports = router
