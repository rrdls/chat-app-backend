import { makePusherAdapter } from './../../websocket/pusher-adapter'
import { AddMessageController } from './../../../../presentation/controller/message/add-message-controller'
import { IController } from '../../../../presentation/interfaces/controller'
import { makeAddMessage } from '../../usecases'

export const makeAddMessageController = (): IController => {
  const addMessage = makeAddMessage()
  const pusherAdapter = makePusherAdapter()
  return new AddMessageController(addMessage, pusherAdapter)
}
