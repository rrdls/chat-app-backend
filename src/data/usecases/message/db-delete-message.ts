import { IDeleteMessage } from './../../domain/usecases'
import { IDeleteMessageRepository } from './../interfaces/db/message'

export class DBDeleteMessage implements IDeleteMessage {
  private readonly deleteMessageRepository: IDeleteMessageRepository

  constructor(deleteMessageRepository: IDeleteMessageRepository) {
    this.deleteMessageRepository = deleteMessageRepository
  }
  async delete(id: string): Promise<void> {
    await this.deleteMessageRepository.delete(id)
  }
}
