import { HttpResponse } from '../interfaces'
import { IController } from '../interfaces'
import { IAddMessage } from '../../domain/usecases'

import Pusher from 'pusher'

const pusher = new Pusher({
  appId: '1150691',
  key: '3fd0bf5e51fea33ce05a',
  secret: '4984d889c427f599264c',
  cluster: 'eu',
  useTLS: true
})

export class AddMessageController implements IController {
  private readonly addMessage: IAddMessage

  constructor(addMessage: IAddMessage) {
    this.addMessage = addMessage
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    this.addMessage.add(request)
    pusher.trigger('message', 'inserted', request)
    return { statusCode: 201, body: request }
  }
}

type HttpRequest = {
  message: string
  name: string
  timestamp: Date
  received: boolean
}
