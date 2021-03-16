import { Message } from '../../../../domain/entities'

export interface IAddMessageRepository {
  add: (message: Message) => Promise<void>
}
