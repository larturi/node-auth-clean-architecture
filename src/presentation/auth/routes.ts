import { Router } from 'express'
import { AuthController } from './controller.js'

export class AuthRoutes {
  static routes(): Router {
    const router = Router()
    const controller = new AuthController()

    router.post('/v1/login', controller.loginUser)

    router.post('/v1/register', controller.registerUser)

    return router
  }
}
