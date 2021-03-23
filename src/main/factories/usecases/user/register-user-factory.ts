import { DBRegisterUser } from './../../../../data/usecases/user/db-register-user'
import { UserMongoRepository } from './../../../../infrastructure/database/mongodb/user-mongo-repository'
import { IRegisterUser } from './../../../../domain/usecases'
import { MongoHelper } from '../../../../infrastructure/database'
import { env } from '../../../config'

export const makeRegisterUser = (): IRegisterUser => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const userMongoRepository = new UserMongoRepository(mongoHelper)
  const dbRegisterUser = new DBRegisterUser(userMongoRepository)
  return dbRegisterUser
}
