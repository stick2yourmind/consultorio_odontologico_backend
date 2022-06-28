const { Schema } = require('mongoose')
const MongoContainer = require('../../containers/mongo.container')

const ContactMessageSchema = new Schema({
  email: { required: true, type: String },
  message: { maxlength: 1000, required: true, type: String },
  name: { required: true, type: String },
  phone: { required: true, type: String }
}, { timestamps: true })

class MongoContactMessageDao extends MongoContainer {
  constructor () {
    super('messages', ContactMessageSchema)
  }
}

module.exports = MongoContactMessageDao
