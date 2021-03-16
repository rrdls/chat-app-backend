import { Schema, model } from 'mongoose'

const MessageSchema = new Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
})

export default model('message', MessageSchema)
