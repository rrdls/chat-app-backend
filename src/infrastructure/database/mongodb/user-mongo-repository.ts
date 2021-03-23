import { User } from './../../../domain/entities/user'
import { ILoadAllUsersRepository } from './../../../data/interfaces/db/user/load-all-users-repository'
import { IRegisterUserRepository } from './../../../data/interfaces/db/user/register-user-repository'
import { IMongoHelper } from '../../../data/interfaces/db'

export class UserMongoRepository
  implements IRegisterUserRepository, ILoadAllUsersRepository {
  constructor(private readonly mongoHelper: IMongoHelper) {}

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
