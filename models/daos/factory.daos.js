const MongoAppointmentDao = require('./appointment/appointment.mongo.dao')

class DaosFactory {
  static getDaos (type) {
    let AppointmentDao
    switch (type.toLowerCase()) {
      case 'appointment':
        AppointmentDao = new MongoAppointmentDao()
        break
      default:
        throw new Error('Invalid data source, please provide one of the following (products | users)')
    }
    return {
      AppointmentDao
    }
  }
}

module.exports = DaosFactory
