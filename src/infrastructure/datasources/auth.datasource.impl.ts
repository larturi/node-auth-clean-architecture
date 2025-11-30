import { AuthDatasource } from '@/domain/datasources/auth.datasource.js'
import { RegisteruserDto } from '@/domain/dtos/auth/register-user.dto.js'
import { UserEntity } from '@/domain/entities/user.entity.js'
import { CustomError } from '@/domain/errors/custom.error.js'

export class AuthDatasourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisteruserDto): Promise<UserEntity> {
    const { email, password, name } = registerUserDto

    try {
      const user = new UserEntity('1', name, email, password, ['ADMIN_ROLE'])
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
