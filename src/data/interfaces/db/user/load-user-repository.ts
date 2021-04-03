import { User } from '../../../../domain/entities'

export interface ILoadUserRepository {
  load(id: string): Promise<User>
}
