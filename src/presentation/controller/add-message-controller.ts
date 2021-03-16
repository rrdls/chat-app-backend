import { HttpResponse } from '../interfaces'
import { IController } from '../interfaces'
import { IAddMessage } from '../../domain/usecases'

export class AddMessageController implements IController {
  private readonly addMessage: IAddMessage

  constructor(addMessage: IAddMessage) {
    this.addMessage = addMessage
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    await this.addMessage.add(request)
    return { statusCode: 201, body: {} }
  }
}

type HttpRequest = {
  message: string
  name: string
  timestamp: Date
  received: boolean
}
