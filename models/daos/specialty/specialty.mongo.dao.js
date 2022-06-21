const { Schema } = require('mongoose')
const MongoContainer = require('../../containers/mongo.container')

const SpecialtySchema = new Schema({
  description: { required: true, type: String },
  img: { required: true, type: String },
  imgSvg: { required: true, type: String },
  specialty: { required: true, type: String },
  summary: { required: true, type: String }
}, { timestamps: true })

class MongoSpecialtyDao extends MongoContainer {
  constructor () {
    super('specialties', SpecialtySchema)
  }
}

module.exports = MongoSpecialtyDao
