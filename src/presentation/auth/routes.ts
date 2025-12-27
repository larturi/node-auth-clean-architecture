import { Router } from 'express'
import { AuthController } from '@/presentation/auth/controller.js'
import { AuthRepositoryImpl } from '@/infrastructure/repositories/auth.repository.impl.js'
import { AuthDatasourceImpl } from '@/infrastructure/datasources/auth.datasource.impl.js'

export class AuthRoutes {
  static routes(): Router {
    const router = Router()

    const database = new AuthDatasourceImpl()

    const authRepository = new AuthRepositoryImpl(database)

    const controller = new AuthController(authRepository)

    router.post('/v1/login', controller.loginUser)

    router.post('/v1/register', controller.registerUser)

    return router
  }
}
