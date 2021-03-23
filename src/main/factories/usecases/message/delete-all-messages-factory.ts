import { DBDeleteAllMessages } from '../../../../data/usecases/message'
import { MessageMongoRepository } from './../../../../infrastructure/database/mongodb'
import { IDeleteAllMessages } from '../../../../domain/usecases'
import { MongoHelper } from '../../../../infrastructure/database'
import { env } from '../../../config'

export const makeDeleteAllMessages = (): IDeleteAllMessages => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const messageMongoRepository = new MessageMongoRepository(mongoHelper)
  const dbDeleteAllMessages = new DBDeleteAllMessages(messageMongoRepository)
  return dbDeleteAllMessages
}
