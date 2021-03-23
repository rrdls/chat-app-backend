import { DeleteAllMessagesController } from '../../../../presentation/controller'
import { IController } from '../../../../presentation/interfaces/controller'
import { makeDeleteAllMessages } from '../../usecases'

export const makeDeleteAllMessagesController = (): IController => {
  const deleteAllMessages = makeDeleteAllMessages()
  return new DeleteAllMessagesController(deleteAllMessages)
}
