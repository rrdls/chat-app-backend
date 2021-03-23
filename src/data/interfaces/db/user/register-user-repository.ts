import { User } from './../../../../domain/entities'

export interface IRegisterUserRepository {
  register(user: User): Promise<void>
}
