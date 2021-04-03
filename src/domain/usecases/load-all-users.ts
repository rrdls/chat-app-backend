import { User } from '../entities/user'

export interface ILoadAllUsers {
  loadAll(): Promise<User[]>
}
