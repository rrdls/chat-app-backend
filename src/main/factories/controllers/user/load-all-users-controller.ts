import { makeLoadAllUsers } from './../../usecases/user/load-all-users-factory'
import { IController } from '../../../../presentation/interfaces/controller'
import { LoadAllUsersController } from '../../../../presentation/controller'

export const makeLoadAllUsersController = (): IController => {
  const loadAllUsers = makeLoadAllUsers()
  return new LoadAllUsersController(loadAllUsers)
}
