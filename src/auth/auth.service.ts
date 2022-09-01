import { Injectable } from '@nestjs/common';
import { UserLogin } from './models/UserLogin';
import { AuthRepository } from './repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  validateUser(username: string, password: string) {
    return this.repository.validateUser(username, password);
  }

  login(user: UserLogin) {
    return this.repository.login(user);
  }
}
