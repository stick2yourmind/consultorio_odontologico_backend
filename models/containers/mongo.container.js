const mongoose = require('mongoose')
const DB_CFG = require('../../config/db.config')
const { STATUS } = require('../../utils/constants/httpStatus.constant')
const CustomError = require('../../utils/errors/customError')

class MongoContainer {
  static #collectionInstances = {}
  constructor (collection, schema) {
    try {
      if (!MongoContainer.#collectionInstances[collection]) {
        this.connect().then(() => console.log(`Connecting to MongoDB collection: ${collection}...`))
        this.collection = collection
        this.Model = mongoose.model(collection, schema)
        MongoContainer.#collectionInstances[collection] = this
      } else return MongoContainer.#collectionInstances[collection]
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        'Error occurred while trying to setup a connection to database',
        error
      )
    }
  }

  async connect () {
    try {
      !DB_CFG.MONGO.options
        ? mongoose.connect(DB_CFG.MONGO.URI)
        : mongoose.connect(DB_CFG.MONGO.URI, DB_CFG.MONGO.options)
      mongoose.connection.on('open', () => console.log(`Mongoose: ${this.collection}'s model connected!`))
      mongoose.connection.on('error', () => console.log('Mongoose connection could not been established'))
      mongoose.connection.on('disconnected', () => console.log('Mongoose default connection: is not connected'))
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        'Error occurred while trying to connect to database',
        error
      )
    }
  }

  async getAll () {
    try {
      const documents = await this.Model.find({}, { __v: 0 }).lean()
      if (Array.isArray(documents) && !documents.length) {
        throw new CustomError(
          STATUS.SERVER_ERROR,
          'Error occurred while trying to get all documents from db',
          'No documents where found'
        )
      }
      return documents
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        'Error occurred while trying to get all documents from db',
        error
      )
    }
  }

  async getById (id, populateColl = null, fields = null) {
    try {
      let document = {}
      if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(
          STATUS.SERVER_ERROR,
          'Failed validation\'s id',
        `MongoDB's ${id} is not a valid ObjectId`
        )
      }
      if (populateColl) { document = await this.Model.findOne({ _id: id }, { __v: 0 }).populate(populateColl, fields) } else document = await this.Model.findOne({ _id: id }, { __v: 0 })
      if (!document) { throw new Error(`MongoDB document with id: ${id} could not be found!`) }
      return document
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        `Error occurred while trying to get a document from db by id:${id}`,
        error
      )
    }
  }

  async getByEmail (userEmail, populateColl = null, fields = null) {
    try {
      let document = {}
      if (populateColl) {
        document = await this.Model.findOne({ email: userEmail }, { __v: 0 })
          .populate(populateColl, fields)
      } else document = await this.Model.findOne({ email: userEmail }, { __v: 0 })
      if (!document) { throw new Error(`MongoDB document with email: ${userEmail} could not be found!`) }
      return document
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        `Error occurred while trying to get a document from db by email:${userEmail}`,
        error
      )
    }
  }

  async getBy (key, value) {
    try {
      const document = await this.Model.find({ [key]: value }, { __v: 0 })
      if (!document) { throw new Error(`MongoDB document with key: ${key} value: ${value}could not be found!`) }
      return document
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        `Error occurred while trying to get a document from db by ${key}:${value}`,
        error
      )
    }
  }

  async create (payload) {
    try {
      const newDocument = new this.Model(payload)
      const newDocumentSaved = await newDocument.save()
      return newDocumentSaved
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        `Error occurred while trying to save document: ${JSON.stringify(payload)}`,
        error
      )
    }
  }

  async updateById (id, payload) {
    try {
      if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(
          STATUS.SERVER_ERROR,
          'Failed validation\'s id',
          `MongoDB's ${id} is not a valid ObjectId`
        )
      }
      const updatedDocument = await this.Model.updateOne({ _id: id }, { $set: { ...payload } })
      if (!updatedDocument.matchedCount) {
        throw new CustomError(
          STATUS.SERVER_ERROR,
          'Document could not been updated',
          `MongoDB's document with id: ${id} could not been found!`
        )
      }
      return updatedDocument
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        `Error occurred while trying to update document with id: ${id}`,
        error
      )
    }
  }

  async deleteById (id) {
    try {
      if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(
          STATUS.SERVER_ERROR,
          'Failed validation\'s id',
          `MongoDB's ${id} is not a valid ObjectId`
        )
      }
      const deletedDocument = await this.Model.deleteOne({ _id: id })
      if (!deletedDocument.deletedCount) {
        throw new CustomError(
          STATUS.SERVER_ERROR,
          'Document could not been deleted',
          `MongoDB's document with id: ${id} could not been found!`
        )
      }
      return deletedDocument
    } catch (error) {
      throw new CustomError(
        STATUS.SERVER_ERROR,
        `Error occurred while trying to delete document with id: ${id}`,
        error
      )
    }
  }
}

module.exports = MongoContainer
