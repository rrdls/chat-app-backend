import { ILoadUserRepository } from './../../interfaces/db/user/load-user-repository'
import { User } from '../../../domain/entities'
import { ILoadUser } from './../../../domain/usecases'
export class DBLoadUser implements ILoadUser {
  constructor(private readonly loadUserRepository: ILoadUserRepository) {}

  async load(id: string): Promise<User> {
    return await this.loadUserRepository.load(id)
  }
}
