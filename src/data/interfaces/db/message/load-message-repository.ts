import { Message } from '../../../../domain/entities'

export interface ILoadMessageRepository {
  load: () => Promise<Message[]>
}
