import { IAddMessageRepository } from './../interfaces/db/message'
import { Message } from '../../domain/entities'
import { IAddMessage } from './../../domain/usecases'

export class DBAddMessage implements IAddMessage {
  private readonly addMessageRepository: IAddMessageRepository

  constructor(addMessageRepository: IAddMessageRepository) {
    this.addMessageRepository = addMessageRepository
  }
  async add(message: Message): Promise<void> {
    await this.addMessageRepository.add(message)
  }
}
