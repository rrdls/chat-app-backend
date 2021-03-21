import { ILoadMessageRepository } from './../interfaces/db/message'
import { Message } from '../../domain/entities'
import { ILoadMessages } from './../../domain/usecases'

export class DBLoadMessages implements ILoadMessages {
  private readonly loadMessagesRepository: ILoadMessageRepository

  constructor(loadMessagesRepository: ILoadMessageRepository) {
    this.loadMessagesRepository = loadMessagesRepository
  }
  async load(): Promise<Message[]> {
    return await this.loadMessagesRepository.load()
  }
}
