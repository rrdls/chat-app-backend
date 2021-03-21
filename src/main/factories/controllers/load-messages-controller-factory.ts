import { LoadMessageController } from '../../../presentation/controller'
import { IController } from '../../../presentation/interfaces/controller'
import { makeLoadMessage } from '../usecases'

export const makeLoadMessageController = (): IController => {
  const loadMessage = makeLoadMessage()
  return new LoadMessageController(loadMessage)
}
