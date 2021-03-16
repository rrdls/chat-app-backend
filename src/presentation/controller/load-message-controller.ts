import { ILoadMessages } from './../../domain/usecases'
import { HttpResponse } from '../interfaces'
import { IController } from '../interfaces'

export class LoadMessageController implements IController {
  private readonly loadMessages: ILoadMessages
  constructor(loadMessage: ILoadMessages) {
    this.loadMessages = loadMessage
  }

  async handle(request: any): Promise<HttpResponse> {
    const messages = this.loadMessages.load()
    return await { statusCode: 200, body: messages }
  }
}
