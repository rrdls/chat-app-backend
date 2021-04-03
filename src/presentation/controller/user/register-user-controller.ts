import { User } from './../../../domain/entities/user'
import { HttpResponse } from '../../interfaces'
import { IController } from '../../interfaces'
import { IRegisterUser } from '../../../domain/usecases'

import Pusher from 'pusher'

const pusher = new Pusher({
  appId: '1150691',
  key: '3fd0bf5e51fea33ce05a',
  secret: '4984d889c427f599264c',
  cluster: 'eu',
  useTLS: true
})

export class RegisterUserController implements IController {
  private readonly registerUser: IRegisterUser

  constructor(registerUser: IRegisterUser) {
    this.registerUser = registerUser
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    this.registerUser.register(request)
    pusher.trigger('message', 'inserted', request)
    return { statusCode: 201, body: request }
  }
}

type HttpRequest = User
