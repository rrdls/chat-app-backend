import { IDeleteMessage } from '../../../domain/usecases'
import { HttpResponse } from '../../interfaces'
import { IController } from '../../interfaces'

export class DeleteMessageController implements IController {
  private readonly deleteMessage: IDeleteMessage

  constructor(deleteMessage: IDeleteMessage) {
    this.deleteMessage = deleteMessage
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    this.deleteMessage.delete(request.id)
    return { statusCode: 200, body: {} }
  }
}

type HttpRequest = {
  id: string
}
