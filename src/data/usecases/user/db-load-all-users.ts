import { ILoadAllUsersRepository } from './../../interfaces/db/user/load-all-users-repository'
import { ILoadAllUsers } from './../../../domain/usecases/load-all-users'
import { User } from './../../../domain/entities/user'

export class DBLoadAllUsers implements ILoadAllUsers {
  private readonly loadAllUsersRepository: ILoadAllUsersRepository

  constructor(loadAllUsersRepository: ILoadAllUsersRepository) {
    this.loadAllUsersRepository = loadAllUsersRepository
  }
  async loadAll(): Promise<User[]> {
    return await this.loadAllUsersRepository.loadAll()
  }
}
