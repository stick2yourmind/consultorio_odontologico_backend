const { Schema } = require('mongoose')
const MongoContainer = require('../../containers/mongo.container')
const { dayName } = require('../../../utils/appointments/appointment.utils')

const AppointmentSchema = new Schema({
  date: { required: true, type: Date, unique: true },
  dayName: { required: false, type: String },
  professional: { default: '', required: false },
  reserved: { default: false, required: false, type: Boolean },
  specialty: { default: '', required: false },
  user: {
    dni: { default: '', required: false, type: Number },
    email: { default: '', required: false, type: String },
    fullName: { default: '', required: false, type: String },
    phone: { default: '', required: false, type: String }
  }
}, { timestamps: true })

AppointmentSchema.pre('save', function (next) {
  const date = new Date(this.date)
  this.dayName = dayName[date.getDay()]
  next()
})

class MongoAppointmentDao extends MongoContainer {
  constructor () {
    super('appointments', AppointmentSchema)
  }
}

module.exports = MongoAppointmentDao
