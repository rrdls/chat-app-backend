import { makeLoadUser } from '../../usecases/user/load-user-factory'
import { LoadUserController } from './../../../../presentation/controller/user/load-user-controller'
import { IController } from './../../../../presentation/interfaces/controller'

export const makeLoadUserController = (): IController => {
  const loadUser = makeLoadUser()
  return new LoadUserController(loadUser)
}
