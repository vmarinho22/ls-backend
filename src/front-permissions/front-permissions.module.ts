import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { FrontPermissionsController } from './front-permissions.controller';
import { FrontPermissionsService } from './front-permissions.service';
import { FrontPermissionsRepository } from './repositories/front-permissions.repository';

@Module({
  controllers: [FrontPermissionsController],
  providers: [FrontPermissionsService, PrismaService, FrontPermissionsRepository]
})
export class FrontPermissionsModule {}
