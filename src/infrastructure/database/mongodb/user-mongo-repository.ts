import { ICreateMessageRepository } from './../../../data/interfaces/db/user'
import { User } from './../../../domain/entities/user'
import { ILoadAllUsersRepository } from './../../../data/interfaces/db/user'
import { IRegisterUserRepository } from './../../../data/interfaces/db/user'
import { IMongoHelper } from '../../../data/interfaces/db'
import { Message } from '../../../domain/entities'

export class UserMongoRepository
  implements
    IRegisterUserRepository,
    ILoadAllUsersRepository,
    ICreateMessageRepository {
  constructor(private readonly mongoHelper: IMongoHelper) {}

  async create(
    user_id: string,
    contact_user_id: string,
    channel: string,
    message: Message
  ): Promise<void> {
    const usersCollection = await this.mongoHelper.getCollection('users')
    const options = {
      projection: { channels: { $elemMatch: { name: channel } } }
    }
    const user = await usersCollection.findOne({ _id: user_id }, options)
    const oldMessages = user.channels[0].messages
    const newMessages = [...oldMessages, message]
    await usersCollection.updateOne(
      { _id: user_id },
      { $set: { channels: [{ name: channel, messages: newMessages }] } }
    )
  }

  async register(user: User): Promise<void> {
    const usersCollection = await this.mongoHelper.getCollection('users')
    await usersCollection.insertOne(user)
  }

  async load(): Promise<User[]> {
    const usersCollection = await this.mongoHelper.getCollection('users')
    const users = await usersCollection.find().toArray()
    return users
  }
}
