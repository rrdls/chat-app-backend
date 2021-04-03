import { ILoadAllUsers } from '../../../domain/usecases'
import { HttpResponse } from '../../interfaces'
import { IController } from '../../interfaces'

export class LoadAllUsersController implements IController {
  private readonly loadAllUsers: ILoadAllUsers
  constructor(loadAllUsers: ILoadAllUsers) {
    this.loadAllUsers = loadAllUsers
  }

  async handle(request: any): Promise<HttpResponse> {
    const users = await this.loadAllUsers.loadAll()
    return { statusCode: 200, body: users }
  }
}
