import { UserMongoRepository } from './../../../../infrastructure/database/mongodb/user-mongo-repository'
import { DBCreateMessage } from './../../../../data/usecases/user/db-create-message'
import { ICreateMessage } from './../../../../domain/usecases/create-message'
import { MongoHelper } from '../../../../infrastructure/database'
import { env } from '../../../config'

export const makeCreateMessage = (): ICreateMessage => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const userMongoRepository = new UserMongoRepository(mongoHelper)
  const dbCreateMessage = new DBCreateMessage(userMongoRepository)
  return dbCreateMessage
}
