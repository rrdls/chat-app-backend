import { IController } from './../../../../presentation/interfaces/controller'
import { makeDeleteMessage } from '../../usecases'
import { DeleteMessageController } from './../../../../presentation/controller/message/delete-message-controller'

export const makeDeleteMessageController = (): IController => {
  const deleteMessage = makeDeleteMessage()
  return new DeleteMessageController(deleteMessage)
}
