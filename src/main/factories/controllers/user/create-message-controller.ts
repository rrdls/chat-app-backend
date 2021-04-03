import { makeCreateMessage } from './../../usecases/user/create-message-factory'
import { IController } from '../../../../presentation/interfaces'
import { CreateMessageController } from './../../../../presentation/controller/user/create-message-controller'

export const makeCreateMessageController = (): IController => {
  const createMessage = makeCreateMessage()
  return new CreateMessageController(createMessage)
}
