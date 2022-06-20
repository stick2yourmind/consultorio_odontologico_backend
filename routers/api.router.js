const { Router } = require('express')
const appointmentRoutes = require('./appointment/appointment.router')
const professionalRoutes = require('./professional/professional.router')

const router = Router()

// Routes
router.use('/appointments', appointmentRoutes)
router.use('/professionals', professionalRoutes)

module.exports = router
