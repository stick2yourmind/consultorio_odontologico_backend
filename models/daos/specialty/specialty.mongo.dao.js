const { Schema } = require('mongoose')
const MongoContainer = require('../../containers/mongo.container')

const SpecialtySchema = new Schema({
  img: { required: true, type: String },
  name: { required: true, type: String }
}, { timestamps: true })

class MongoSpecialtyDao extends MongoContainer {
  constructor () {
    super('specialties', SpecialtySchema)
  }
}

module.exports = MongoSpecialtyDao
