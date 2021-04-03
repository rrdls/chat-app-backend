import { ILoadUser } from './../../../../domain/usecases/load-user'
import { UserMongoRepository } from './../../../../infrastructure/database/mongodb/user-mongo-repository'
import { DBLoadUser } from './../../../../data/usecases/user/db-load-user'
import { MongoHelper } from '../../../../infrastructure/database'
import { env } from '../../../config'

export const makeLoadUser = (): ILoadUser => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const userMongoRepository = new UserMongoRepository(mongoHelper)
  const dbLoadUser = new DBLoadUser(userMongoRepository)
  return dbLoadUser
}
