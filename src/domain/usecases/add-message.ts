import { Message } from './../entities/message'

export interface IAddMessage {
  add(message: Message): Promise<void>
}
