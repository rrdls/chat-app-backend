import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import Messages from './dbMessages'
import Pusher from 'pusher'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const connectionURL =
  'mongodb+srv://admin:Ef8wIpAWRnHfPmzj@cluster0.7yxcx.mongodb.net/chatappdb?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const pusher = new Pusher({
  appId: '1150691',
  key: '3fd0bf5e51fea33ce05a',
  secret: '4984d889c427f599264c',
  cluster: 'eu',
  useTLS: true
})

const db = mongoose.connection
db.once('open', () => {
  const msgCollection = db.collection('messagecontents')
  const changeStream = msgCollection.watch()
  changeStream.on('change', (change) => {
    console.log(change)
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

app.get('/api/v1/messages/sync', (request: Request, response: Response) => {
  Messages.find((error, data) => {
    if (error) {
      response.status(500).send(error)
    } else {
      response.status(200).send(data)
    }
  })
})

app.post('/api/v1/messages/new', (request: Request, response: Response) => {
  const dbMessage = request.body
  Messages.create(dbMessage, (error, data) => {
    if (error) {
      response.status(500).send(error)
    } else {
      response.status(201).send(data)
    }
  })
})

const port = process.env.PORT || 9000
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
