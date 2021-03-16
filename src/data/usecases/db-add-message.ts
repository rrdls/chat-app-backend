import { IAddMessageRepository } from './../interfaces/db/message/add-message-repository'
import { Message } from '../../domain/entities'
import { IAddMessage } from './../../domain/usecases/add-message'

export class DBAddMessage implements IAddMessage {
  private readonly addMessageRepository: IAddMessageRepository

  constructor(addMessageRepository: IAddMessageRepository) {
    this.addMessageRepository = addMessageRepository
  }
  async add(message: Message): Promise<void> {
    await this.addMessageRepository.add(message)
  }
}
