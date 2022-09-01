import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './repositories/auth.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AuthRepository]
})
export class AuthModule {}
