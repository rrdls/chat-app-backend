import { IDeleteAllMessages } from '../../../domain/usecases'
import { HttpResponse } from '../../interfaces'
import { IController } from '../../interfaces'

export class DeleteAllMessagesController implements IController {
  private readonly deleteAllMessages: IDeleteAllMessages

  constructor(deleteAllMessages: IDeleteAllMessages) {
    this.deleteAllMessages = deleteAllMessages
  }

  async handle(request: any): Promise<HttpResponse> {
    this.deleteAllMessages.drop()
    return { statusCode: 200, body: {} }
  }
}
