import { Router } from 'express'
import { AuthRoutes } from '@/presentation/auth/routes.js'

export class AppRoutes {
  static routes(): Router {
    const router = Router()

    router.use('/auth', AuthRoutes.routes())

    return router
  }
}
