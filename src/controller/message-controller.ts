import { Request, Response } from 'express'
import MessageService from '../service/message-service'

class MessageController {
  async index(request: Request, response: Response) {
    try {
      const messages = await MessageService.findAllMessages()
      response.status(200).send(messages)
    } catch (error) {
      response.status(500).send(error)
    }
  }
  async store(request: Request, response: Response) {
    const { body } = request
    try {
      const message = await MessageService.saveMessage(body)
      response.status(201).json(message)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

export default new MessageController()
