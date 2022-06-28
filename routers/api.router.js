const { Router } = require('express')
const appointmentRoutes = require('./appointment/appointment.router')
const professionalRoutes = require('./professional/professional.router')
const specialtyRoutes = require('./specialty/specialty.router')
const contactMessageRoutes = require('./contactMessage/contactMessage.router')

const router = Router()

// API Routes
router.use('/appointments', appointmentRoutes)
router.use('/professionals', professionalRoutes)
router.use('/specialties', specialtyRoutes)
router.use('/contactMessages', contactMessageRoutes)

module.exports = router
