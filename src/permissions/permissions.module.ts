import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { PermissionsRepository } from './repositories/permissions.repository';

@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService, PrismaService, PermissionsRepository]
})
export class PermissionsModule {}
