const express = require('express')
const CONFIG = require('./config/server.config')
const appRouter = require('./routers/app.router')
const cors = require('cors')
const corsOptions = require('./utils/cors/cors.utils')
const credentials = require('./middleware/cors.middleware')
const path = require('path')

const app = express()

// App middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, './public')))

// Handle options credentials check - before CORS!
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors(corsOptions))

// Routes
app.use('/', appRouter)

const server = app.listen(CONFIG.PORT, CONFIG.HOST, () => {
  console.log(`Server is up and running on port => ${CONFIG.PORT}`)
})

server.on('error', (error) => {
  console.log('There was an unexpected error in the server')
  console.log(error)
})
