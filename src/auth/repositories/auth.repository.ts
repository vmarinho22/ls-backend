import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnauthorizedError } from './../../common/errors/types/UnauthorizedError';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            username
          },
          { email: username }
        ]
      }
    });

    if (!user) {
      throw new UnauthorizedError('Usuário ou senha inválidos');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedError('Usuário ou senha inválidos');
    }

    delete user.password;

    return user;
  }
}
