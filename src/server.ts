import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import messageRoutes from './main/routes/message-routes'
// import db from './database/database-config'
import mongoose from 'mongoose'
import pusher from './config/pusher'

const connectionURL =
  'mongodb+srv://admin:admin@cluster0.7yxcx.mongodb.net/chatappdb?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.once('open', () => {
  const msgCollection = db.collection('messages')
  const changeStream = msgCollection.watch()
  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument
      pusher.trigger('message', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received
      })
    } else {
      console.log('Error triggering Pusher')
    }
  })
})

const app = express()
app.use(express.json())
app.use(cors())
app.use(messageRoutes)
dotenv.config()

export default app
