import { ILoadMessageRepository } from './../interfaces/db/message/load-message-repository'
import { Message } from '../../domain/entities'
import { ILoadMessages } from './../../domain/usecases/load-messages'

export class LoadMessages implements ILoadMessages {
  private readonly loadMessagesRepository: ILoadMessageRepository

  constructor(loadMessagesRepository: ILoadMessageRepository) {
    this.loadMessagesRepository = loadMessagesRepository
  }
  async load(): Promise<Message[]> {
    return await this.loadMessagesRepository.load()
  }
}
