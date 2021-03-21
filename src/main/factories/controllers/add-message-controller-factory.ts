import { IController } from './../../../presentation/interfaces/controller'
import { AddMessageController } from './../../../presentation/controller'
import { makeAddMessage } from '../usecases'

export const makeAddMessageController = (): IController => {
  const addMessage = makeAddMessage()
  return new AddMessageController(addMessage)
}
