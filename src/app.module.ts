import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { PermissionsLevelsModule } from './permissions-levels/permissions-levels.module';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { FrontPermissionsModule } from './front-permissions/front-permissions.module';
import { RolesModule } from './roles/roles.module';
import { ProfilesModule } from './profiles/profiles.module';
import { TrainingsModule } from './trainings/trainings.module';
import { TrainingsHistoryModule } from './trainings-history/trainings-history.module';

@Module({
  imports: [PermissionsModule, UsersModule, PermissionsLevelsModule, AuthModule, FrontPermissionsModule, RolesModule, ProfilesModule, TrainingsModule, TrainingsHistoryModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
