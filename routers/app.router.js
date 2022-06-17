const { Router } = require('express')
const apiRouter = require('./api.router')
const errorMiddleware = require('../middleware/error.middleware')
const notFoundMiddleware = require('../middleware/notFound.middleware')

const router = Router()

// Routes
router.use('/api', apiRouter)

// Not found middleware
router.use(notFoundMiddleware)

// Error middleware
router.use(errorMiddleware)

module.exports = router
