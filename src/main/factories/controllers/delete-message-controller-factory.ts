import { DeleteMessageController } from './../../../presentation/controller'
import { IController } from './../../../presentation/interfaces/controller'
import { makeDeleteMessage } from '../usecases'

export const makeDeleteMessageController = (): IController => {
  const deleteMessage = makeDeleteMessage()
  return new DeleteMessageController(deleteMessage)
}
