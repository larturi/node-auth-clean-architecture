import { Validators } from '../../../config/validators.js'

export class RegisteruserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(object: {
    [key: string]: any
  }): [string | undefined, RegisteruserDto?] {
    const { name, email, password } = object

    if (!name) return ['Missing name']
    if (!email) return ['Missing email']
    if (!Validators.email.test(email)) return ['Invalid email']
    if (!password) return ['Missing password']
    if (password.length < 6)
      return ['Password must be at least 6 characters long']

    return [undefined, new RegisteruserDto(name, email.toLowerCase(), password)]
  }
}
