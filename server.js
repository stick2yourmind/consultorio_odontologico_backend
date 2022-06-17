const express = require('express')
const CONFIG = require('./config/server.config')
const appRouter = require('./routers/app.router')

const app = express()

// App middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', appRouter)

const server = app.listen(CONFIG.PORT, CONFIG.HOST, () => {
  console.log(`Server is up and running on port => ${CONFIG.PORT}`)
})

server.on('error', (error) => {
  console.log('There was an unexpected error in the server')
  console.log(error)
})
