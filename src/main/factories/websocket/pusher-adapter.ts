import { ITrigger } from './../../../data/interfaces/websocket/trigger'
import { PusherAdapter } from './../../../infrastructure/websocket/pusher-adapter'

export const makePusherAdapter = (): ITrigger => {
  return new PusherAdapter()
}
