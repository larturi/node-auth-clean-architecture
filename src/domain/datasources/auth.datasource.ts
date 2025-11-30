import { UserEntity } from '@/domain/entities/user.entity.js'
import { RegisteruserDto } from '@/domain/dtos/auth/register-user.dto.js'

export abstract class AuthDatasource {
  abstract register(registerUserDto: RegisteruserDto): Promise<UserEntity>

  abstract login(email: string, password: string): Promise<string>
}
