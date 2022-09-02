import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { UserLogin } from './models/UserLogin';
import { UserToken } from './models/UserToken';
import { AuthRepository } from './repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  validateUser(username: string, password: string): Promise<UserEntity> {
    return this.repository.validateUser(username, password);
  }

  login(user: UserLogin): UserToken {
    return this.repository.login(user);
  }
}
