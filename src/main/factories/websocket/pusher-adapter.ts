import { IWebSocket } from '../../../data/interfaces/websocket/websocket'
import { PusherAdapter } from './../../../infrastructure/websocket/pusher-adapter'

export const makePusherAdapter = (): IWebSocket => {
  return new PusherAdapter()
}
