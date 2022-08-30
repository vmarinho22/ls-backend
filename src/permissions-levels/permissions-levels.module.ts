import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PermissionsLevelsController } from './permissions-levels.controller';
import { PermissionsLevelsService } from './permissions-levels.service';
import { PermissionsLevelsRepository } from './repositories/permissions-levels.repository';

@Module({
  controllers: [PermissionsLevelsController],
  providers: [PermissionsLevelsService, PrismaService, PermissionsLevelsRepository]
})
export class PermissionsLevelsModule {}
