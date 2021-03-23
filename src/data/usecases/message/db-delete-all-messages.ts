import { IDeleteAllMessages } from '../../domain/usecases/delete-all-messages'
import { IDeleteAllMessagesRepository } from './../interfaces/db/message'

export class DBDeleteAllMessages implements IDeleteAllMessages {
  private readonly deleteAllMessagesRepository: IDeleteAllMessagesRepository

  constructor(deleteAllMessagesRepository: IDeleteAllMessagesRepository) {
    this.deleteAllMessagesRepository = deleteAllMessagesRepository
  }
  async drop(): Promise<void> {
    await this.deleteAllMessagesRepository.drop()
  }
}
