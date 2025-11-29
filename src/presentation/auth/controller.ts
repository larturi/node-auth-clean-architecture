import { Request, Response } from 'express'

export class AuthController {
  // DI
  constructor() {}

  registerUser = (req: Request, res: Response) => {
    // Registration logic here
    res.json('User registered')
  }

  loginUser = (req: Request, res: Response) => {
    // Login logic here
    res.json('User logged in')
  }
}
