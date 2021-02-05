import { Schema, model } from 'mongoose'

const ChatAppSchema = new Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
})

export default model('messagecontents', ChatAppSchema)
