import { MongoHelper } from './../../../infrastructure/database/mongodb'
import { MessageMongoRepository } from './../../../infrastructure/database/mongodb'
import { DBLoadMessages } from './../../../data/usecases'
import { ILoadMessages } from './../../../domain/usecases'
import { env } from '../../config'

export const makeLoadMessage = (): ILoadMessages => {
  const mongoHelper = new MongoHelper(env.mongoUrl)
  const messageMongoRepository = new MessageMongoRepository(mongoHelper)
  const dbLoadMessage = new DBLoadMessages(messageMongoRepository)
  return dbLoadMessage
}
