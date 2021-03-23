import { Message } from './../entities/message'

export interface ILoadMessages {
  load(): Promise<Message[]>
}
