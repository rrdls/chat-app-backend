import express from 'express'
const routes = express.Router()
import MessageController from '../../controller/message-controller'

routes.get('/api/v1/messages', MessageController.index)
routes.post('/api/v1/messages', MessageController.store)

export default routes
