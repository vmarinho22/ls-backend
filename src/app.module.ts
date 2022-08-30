import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { PermissionsLevelsModule } from './permissions-levels/permissions-levels.module';

@Module({
  imports: [PermissionsModule, UsersModule, PermissionsLevelsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
