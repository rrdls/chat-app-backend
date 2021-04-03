import { IRegisterUser } from './../../../domain/usecases/register-user'
import { User } from './../../../domain/entities/user'
import { IRegisterUserRepository } from './../../interfaces/db/user/register-user-repository'

export class DBRegisterUser implements IRegisterUser {
  constructor(
    private readonly registerUserRepository: IRegisterUserRepository
  ) {}

  async register(message: User): Promise<void> {
    await this.registerUserRepository.register(message)
  }
}
