import { IWebSocket } from './../../data/interfaces/websocket/websocket'
import Pusher from 'pusher'

const options = {
  appId: '1150691',
  key: '3fd0bf5e51fea33ce05a',
  secret: '4984d889c427f599264c',
  cluster: 'eu',
  useTLS: true
}

export class PusherAdapter implements IWebSocket {
  async trigger(channel: string, event: string, data: any): Promise<void> {
    const pusher = new Pusher(options)
    pusher.trigger(channel, event, data)
  }
}
