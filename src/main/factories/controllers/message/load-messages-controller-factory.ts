import { makeLoadMessages } from './../../usecases/message/load-messages-factory'
import { IController } from './../../../../presentation/interfaces/controller'
import { LoadMessagesController } from './../../../../presentation/controller/message/load-messages-controller'

export const makeLoadMessageController = (): IController => {
  const loadMessage = makeLoadMessages()
  return new LoadMessagesController(loadMessage)
}
