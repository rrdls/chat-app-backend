import { User } from './../entities/user'

export interface IRegisterUser {
  register(user: User): Promise<void>
}
