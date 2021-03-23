import { User } from '../entities/user'

export interface ILoadAllUsers {
  load(): Promise<User[]>
}
