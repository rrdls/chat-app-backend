import { makeLoadAllUsersController } from './../factories/controllers/user/load-all-users-controller'
import { makeRegisterUserController } from './../factories/controllers/user/register-user-controller'
import { adaptRoute } from './../adapter'
import { Router } from 'express'
const routes = Router()

routes.get('/users', adaptRoute(makeLoadAllUsersController()))
routes.post('/users', adaptRoute(makeRegisterUserController()))
export default routes
