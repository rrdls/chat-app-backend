import Message from '../model/message-model'

class MessageService {
  async findAllMessages() {
    const messages = await Message.find()
    return messages
  }

  async saveMessage(body) {
    const message = await Message.create(body)
    return message
  }
}

export default new MessageService()
