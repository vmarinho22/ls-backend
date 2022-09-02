import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { UserFromJwt } from './auth/models/UserFromJwt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentUser() user): UserFromJwt {
    return user;
  }
}
