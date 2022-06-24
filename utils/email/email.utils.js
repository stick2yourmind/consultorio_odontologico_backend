const nodemailer = require('nodemailer')
const EMAIL_CFG = require('../../config/email.config')

const mailOptions = (to, subject, html) => ({
  from: 'consultorio.dental.mini@gmail.com',
  html,
  subject,
  to
})

const transporter = nodemailer.createTransport({
  auth: {
    pass: EMAIL_CFG.PASS,
    user: EMAIL_CFG.ACCOUNT
  },
  port: EMAIL_CFG.PORT,
  service: EMAIL_CFG.SERVICE
})

module.exports = {
  mailOptions,
  transporter
}
