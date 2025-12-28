import { BcryptAdapter } from '@/config/bcrypt.js'
import { UserModel } from '@/data/mongodb/models/user.model.js'
import { AuthDatasource } from '@/domain/datasources/auth.datasource.js'
import { RegisteruserDto } from '@/domain/dtos/auth/register-user.dto.js'
import { UserEntity } from '@/domain/entities/user.entity.js'
import { CustomError } from '@/domain/errors/custom.error.js'

export class AuthDatasourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisteruserDto): Promise<UserEntity> {
    const { email, password, name } = registerUserDto

    try {
      // Verificar si el usuario ya existe en la base de datos
      const userExists = await UserModel.findOne({ email })
      console.log(userExists)
      if (userExists) {
        throw CustomError.badRequest('User already exists')
      }

      // Encriptar la contraseña antes de guardarla
      const hashedPassword = BcryptAdapter.hash(password)

      // Crear un nuevo usuario
      const newUser = await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword,
      })
      await newUser.save()

      const user = new UserEntity(
        newUser.id.toString(),
        name,
        email,
        hashedPassword,
        newUser.roles
      )
      return user
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }

      throw CustomError.internalServer()
    }
  }

  login(email: string, password: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
}
