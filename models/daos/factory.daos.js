const MongoAppointmentDao = require('./appointment/appointment.mongo.dao')
const MongoSpecialtyDao = require('./specialty/specialty.mongo.dao')
const MongoProfessionalDao = require('./professional/professional.mongo.dao')

class DaosFactory {
  static getDaos (type) {
    let AppointmentDao
    let SpecialtyDao
    let ProfessionalDao
    switch (type.toLowerCase()) {
      case 'appointment':
        AppointmentDao = new MongoAppointmentDao()
        break
      case 'specialty':
        SpecialtyDao = new MongoSpecialtyDao()
        break
      case 'professional':
        ProfessionalDao = new MongoProfessionalDao()
        break
      default:
        throw new Error('Invalid data source, please provide one of the following (products | users)')
    }
    return {
      AppointmentDao,
      ProfessionalDao,
      SpecialtyDao
    }
  }
}

module.exports = DaosFactory
