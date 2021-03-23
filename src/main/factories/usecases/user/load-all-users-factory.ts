import { ILoadAllUsers } from './../../../../domain/usecases/load-all-users'
import { UserMongoRepository } from './../../../../infrastructure/database/mongodb/user-mongo-repository'
import { MongoHelper } from './../../../../infrastructure/database/mongodb'
import { env } from '../../../config'
import { DBLoadAllUsers } from '../../../../data/usecases/user'

export const makeLoadAllUsers = (): ILoadAllUsers => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const userMongoRepository = new UserMongoRepository(mongoHelper)
  const dbLoadAllUsers = new DBLoadAllUsers(userMongoRepository)
  return dbLoadAllUsers
}
