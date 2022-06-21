const { Schema } = require('mongoose')
const MongoContainer = require('../../containers/mongo.container')

const ProfessionalSchema = new Schema({
  img: { required: true, type: String },
  name: { required: true, type: String },
  specialtyId: { ref: 'specialties', required: true, type: Schema.Types.ObjectId }
}, { timestamps: true })

class MongoProfessionalDao extends MongoContainer {
  constructor () {
    super('professionals', ProfessionalSchema)
  }
}

module.exports = MongoProfessionalDao
