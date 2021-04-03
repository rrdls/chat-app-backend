import { User } from './../entities'

export interface ILoadUser {
  load(id: string): Promise<User>
}
