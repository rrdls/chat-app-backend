import { User } from './../../../../domain/entities'

export interface ILoadAllUsersRepository {
  load(): Promise<User[]>
}
