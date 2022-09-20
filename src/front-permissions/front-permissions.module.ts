import { Module } from '@nestjs/common';
import { FrontPermissionsService } from './front-permissions.service';
import { FrontPermissionsController } from './front-permissions.controller';

@Module({
  controllers: [FrontPermissionsController],
  providers: [FrontPermissionsService]
})
export class FrontPermissionsModule {}
