import { ICreateMessage } from './../../../domain/usecases/create-message'
import { HttpResponse } from '../../interfaces'
import { IController } from './../../interfaces/controller'

export class CreateMessageController implements IController {
  constructor(private readonly createMessage: ICreateMessage) {}

  async handle(request: any): Promise<HttpResponse> {
    const { user_id, contact_user_id, channel, message } = request
    this.createMessage.create(user_id, contact_user_id, channel, message)
    return { statusCode: 200, body: {} }
  }
}
