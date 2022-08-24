import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [PermissionsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
