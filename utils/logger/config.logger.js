const log4js = require('log4js')
const path = require('path')

log4js.configure({
  appenders: {
    console: { type: 'console' },
    errorFile: { filename: path.join(__dirname, '../../log/error.log'), type: 'file' },
    warningFile: { filename: path.join(__dirname, '../../log/warn.log'), type: 'file' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' },
    error: { appenders: ['console', 'errorFile'], level: 'error' },
    info: { appenders: ['console'], level: 'info' },
    warn: { appenders: ['console', 'warningFile'], level: 'warn' }
  }
})

const infoLogger = log4js.getLogger('info')
const warnLogger = log4js.getLogger('warn')
const errorLogger = log4js.getLogger('error')

module.exports = {
  errorLogger,
  infoLogger,
  warnLogger
}
