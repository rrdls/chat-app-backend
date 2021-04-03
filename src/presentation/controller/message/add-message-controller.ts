import { IWebSocket } from '../../../data/interfaces/websocket/websocket'
import { HttpResponse } from '../../interfaces'
import { IController } from '../../interfaces'
import { IAddMessage } from '../../../domain/usecases'

export class AddMessageController implements IController {
  private readonly addMessage: IAddMessage
  private readonly websocket: IWebSocket

  constructor(addMessage: IAddMessage, websocket: IWebSocket) {
    this.addMessage = addMessage
    this.websocket = websocket
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    this.addMessage.add(request)
    this.websocket.trigger('message', 'inserted', request)
    return { statusCode: 201, body: request }
  }
}

type HttpRequest = {
  message: string
  name: string
  timestamp: Date
  received: boolean
  user_id: string
}
