import { RegisterUserController } from './../../../../presentation/controller/user/register-user-controller'
import { makeRegisterUser } from './../../usecases/user/register-user-factory'
import { IController } from '../../../../presentation/interfaces/controller'

export const makeRegisterUserController = (): IController => {
  const registerUser = makeRegisterUser()
  return new RegisterUserController(registerUser)
}
