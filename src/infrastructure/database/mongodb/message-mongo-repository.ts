import {
  IDeleteAllMessagesRepository,
  IDeleteMessageRepository
} from './../../../data/interfaces/db/message'
import { ILoadMessageRepository } from './../../../data/interfaces/db/message'
import { IAddMessageRepository } from './../../../data/interfaces/db/message'
import { Message } from '../../../domain/entities'
import { IMongoHelper } from '../../../data/interfaces/db'
import { ObjectId } from 'bson'

export class MessageMongoRepository
  implements
    IAddMessageRepository,
    ILoadMessageRepository,
    IDeleteMessageRepository,
    IDeleteAllMessagesRepository {
  constructor(private readonly mongoHelper: IMongoHelper) {}

  async add(message: Message): Promise<void> {
    const messagesCollection = await this.mongoHelper.getCollection('messages')
    await messagesCollection.insertOne(message)
  }

  async load(): Promise<Message[]> {
    const messagesCollection = await this.mongoHelper.getCollection('messages')
    const messages = await messagesCollection.find().toArray()
    return messages
  }

  async delete(id: string): Promise<void> {
    const messagesCollection = await this.mongoHelper.getCollection('messages')
    await messagesCollection.deleteOne({ _id: new ObjectId(id) })
  }

  async drop(): Promise<void> {
    const messagesCollection = await this.mongoHelper.getCollection('messages')
    await messagesCollection.drop()
  }
}
