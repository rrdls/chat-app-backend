import { makeLoadMessageController } from './../factories/controllers'
import { makeAddMessageController } from './../factories/controllers'
import { makeDeleteMessageController } from '../factories/controllers'
import { makeDeleteAllMessagesController } from '../factories/controllers'
import { adaptRoute } from './../adapter'
import { Router } from 'express'
const routes = Router()

routes.get('/messages', adaptRoute(makeLoadMessageController()))
routes.post('/messages', adaptRoute(makeAddMessageController()))
routes.delete('/messages/:id', adaptRoute(makeDeleteMessageController()))
routes.delete('/messages', adaptRoute(makeDeleteAllMessagesController()))
export default routes
