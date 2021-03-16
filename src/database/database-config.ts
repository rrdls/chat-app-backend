import mongoose from 'mongoose'
import pusher from '../config/pusher'

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

export default db
