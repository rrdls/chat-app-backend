import mongoose from 'mongoose'
import Pusher from 'pusher'

const pusher = new Pusher({
  appId: '1150691',
  key: '3fd0bf5e51fea33ce05a',
  secret: '4984d889c427f599264c',
  cluster: 'eu',
  useTLS: true
})

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
