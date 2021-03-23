import { DBDeleteMessage } from '../../../../data/usecases/message'
import { MessageMongoRepository } from './../../../../infrastructure/database/mongodb'
import { IDeleteMessage } from '../../../../domain/usecases'
import { MongoHelper } from '../../../../infrastructure/database'
import { env } from '../../../config'

export const makeDeleteMessage = (): IDeleteMessage => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const messageMongoRepository = new MessageMongoRepository(mongoHelper)
  const dbDeleteMessage = new DBDeleteMessage(messageMongoRepository)
  return dbDeleteMessage
}
