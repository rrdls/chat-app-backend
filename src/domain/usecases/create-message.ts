import { Message } from '../entities/message'

export interface ICreateMessage {
  create(
    user_id: string,
    contact_user_id: string,
    channel: string,
    message: Message
  ): Promise<void>
}
