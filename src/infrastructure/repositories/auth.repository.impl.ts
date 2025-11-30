import { AuthDatasource } from '@/domain/datasources/auth.datasource.js'
import { RegisteruserDto } from '@/domain/dtos/auth/register-user.dto.js'
import { UserEntity } from '@/domain/entities/user.entity.js'
import { AuthRepository } from '@/domain/repositories/auth.repository.js'

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  register(registerUserDto: RegisteruserDto): Promise<UserEntity> {
    return this.authDatasource.register(registerUserDto)
  }

  login(email: string, password: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
}
