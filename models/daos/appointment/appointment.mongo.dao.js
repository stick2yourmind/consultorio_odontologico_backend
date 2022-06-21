const { Schema } = require('mongoose')
const MongoContainer = require('../../containers/mongo.container')
const { dayName } = require('../../../utils/appointments/appointment.utils')
const add = require('date-fns/add')
const startOfTomorrow = require('date-fns/startOfTomorrow')
const CustomError = require('../../../utils/errors/customError')
const { STATUS } = require('../../../utils/constants/httpStatus.constant')

const AppointmentSchema = new Schema({
  date: { required: true, type: Date, unique: true },
  dayName: { required: false, type: String },
  professionalId: { ref: 'professionals', required: true, type: Schema.Types.ObjectId },
  reserved: { default: false, required: false, type: Boolean },
  specialtyId: { ref: 'specialties', required: true, type: Schema.Types.ObjectId },
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

  //   db.getCollection('appointments').find({'date': {
  //     $gte: new Date('2022-07-04'),
  //     $lte: new Date('2022-07-31')
  // } }).sort({ date: 1 })
  async getAvailableAppointments () {
    try {
      const fromDate = startOfTomorrow()
      const toDate = add(fromDate, { months: 1 })
      const documents = await this.Model.find({ date: { $gte: fromDate, $lte: toDate }, reserved: false },
        { __v: 0, createdAt: 0, professional: 0, reserved: 0, specialty: 0, updatedAt: 0, user: 0 }).sort({ date: 1 }).lean()
      if (Array.isArray(documents) && !documents.length) {
        throw new CustomError(
          STATUS.SERVER_ERROR,
          'Error occurred while trying to get available appointments, no documents were found',
          'No documents where found'
        )
      }
      return documents
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        'Error occurred while trying to get available appointments',
        error
      )
    }
  }
}

module.exports = MongoAppointmentDao
