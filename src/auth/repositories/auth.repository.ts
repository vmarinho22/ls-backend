import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserLogin } from '../models/UserLogin';
import { UserPayload } from '../models/UserPayload';
import { UserToken } from '../models/UserToken';
import { UnauthorizedError } from './../../common/errors/types/UnauthorizedError';
import { UserEntity } from './../../users/entities/user.entity';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<UserEntity> {
    const user: UserEntity = await this.prisma.user.findFirst({
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

    const isPasswordValid: boolean = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedError('Usuário ou senha inválidos');
    }

    delete user.password;

    return user;
  }

  login(user: UserLogin): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      username: user.username
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      user: user.id,
      access_token: jwtToken
    };
  }
}
