import { makeDeleteAllMessages } from '../usecases/delete-all-messages-factory'
import { DeleteAllMessagesController } from './../../../presentation/controller'
import { IController } from './../../../presentation/interfaces/controller'

export const makeDeleteAllMessagesController = (): IController => {
  const deleteAllMessages = makeDeleteAllMessages()
  return new DeleteAllMessagesController(deleteAllMessages)
}
