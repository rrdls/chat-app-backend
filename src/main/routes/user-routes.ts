import { makeCreateMessageController } from './../factories/controllers/user/create-message-controller'
import { makeLoadAllUsersController } from './../factories/controllers/user/load-all-users-controller'
import { makeRegisterUserController } from './../factories/controllers/user/register-user-controller'
import { adaptRoute } from './../adapter'
import { Router } from 'express'
import { makeLoadUserController } from '../factories/controllers/user/load-user-controller'
const routes = Router()

routes.get('/users', adaptRoute(makeLoadAllUsersController()))
routes.get('/user/:id', adaptRoute(makeLoadUserController()))
routes.post('/users', adaptRoute(makeRegisterUserController()))
routes.post('/message', adaptRoute(makeCreateMessageController()))

export default routes
