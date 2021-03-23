import { IRegisterUser } from './../../../domain/usecases/register-user'
import { User } from './../../../domain/entities/user'
import { IRegisterUserRepository } from './../../interfaces/db/user/register-user-repository'

export class DBRegisterUser implements IRegisterUser {
  private readonly registerUserRepository: IRegisterUserRepository

  constructor(registerUserRepository: IRegisterUserRepository) {
    this.registerUserRepository = registerUserRepository
  }
  async register(message: User): Promise<void> {
    await this.registerUserRepository.register(message)
  }
}
