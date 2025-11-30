import { RegisteruserDto } from '@/domain/dtos/auth/register-user.dto.js'
import { AuthRepository } from '@/domain/repositories/auth.repository.js'
import { Request, Response } from 'express'

export class AuthController {
  // DI
  constructor(private readonly authRepository: AuthRepository) {}

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisteruserDto.create(req.body)

    if (error) return res.status(400).json({ error })

    this.authRepository
      .register(registerUserDto!)
      .then((user) => res.status(201).json(user))
      .catch((error) => res.status(500).json(error))
  }

  loginUser = (req: Request, res: Response) => {
    // Login logic here
    res.json('User logged in')
  }
}
