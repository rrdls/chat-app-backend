import { ICreateMessageRepository } from './../../interfaces/db/user/create-message-repository'
import { Message } from '../../../domain/entities'
import { ICreateMessage } from './../../../domain/usecases'

export class DBCreateMessage implements ICreateMessage {
  constructor(
    private readonly createMessageRepository: ICreateMessageRepository
  ) {}
  async create(
    user_id: string,
    contact_user_id: string,
    channel: string,
    message: Message
  ): Promise<void> {
    return this.createMessageRepository.create(
      user_id,
      contact_user_id,
      channel,
      message
    )
  }
}
