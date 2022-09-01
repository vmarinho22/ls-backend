import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'login';
  }

  validateUser(username: string, email: string, password: string) {
    return 'Usuário validado!';
  }
}
