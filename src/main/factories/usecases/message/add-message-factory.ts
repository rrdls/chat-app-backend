import { MessageMongoRepository } from '../../../../infrastructure/database/mongodb'
import { DBAddMessage } from '../../../../data/usecases/message'
import { IAddMessage } from '../../../../domain/usecases'
import { MongoHelper } from '../../../../infrastructure/database'
import { env } from '../../../config'

export const makeAddMessage = (): IAddMessage => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const messageMongoRepository = new MessageMongoRepository(mongoHelper)
  const dbAddMessage = new DBAddMessage(messageMongoRepository)
  return dbAddMessage
}
