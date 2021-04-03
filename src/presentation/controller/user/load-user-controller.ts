import { ILoadUser } from './../../../domain/usecases/load-user'
import { HttpResponse } from '../../interfaces'
import { IController } from './../../interfaces/controller'

export class LoadUserController implements IController {
  constructor(private readonly loadUser: ILoadUser) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const user = await this.loadUser.load(request.id)
    return { statusCode: 200, body: user }
  }
}

type HttpRequest = {
  id: string
}
