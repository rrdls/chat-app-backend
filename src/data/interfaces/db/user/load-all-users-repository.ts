import { User } from './../../../../domain/entities'

export interface ILoadAllUsersRepository {
  loadAll(): Promise<User[]>
}
