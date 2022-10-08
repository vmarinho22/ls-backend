import { Body, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { PermissionInterceptor } from 'src/common/interceptors/permission.interceptor';
import { UserFromJwt } from './../auth/models/UserFromJwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@UseInterceptors(PermissionInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.findOne(+id);
  }

  @Get('/findByEmail/:email')
  findByEmail(@Param('email') email: string): Promise<UserEntity> {
    return this.usersService.findByEmail(email);
  }

  @Get('/isBlocked/:id')
  verifyIfUserIsBlocked(@Param('id') id: string): Promise<{ isBlocked: boolean }> {
    return this.usersService.verifyIfUserIsBlocked(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Patch('/updateAdminStatus/:id')
  updateAdminStatus(
    @Param('id') id: string,
    @CurrentUser() user: UserFromJwt
  ): Promise<UserEntity> {
    return this.usersService.updateAdminStatus(+id, user);
  }

  @Patch('/updateAccountBlockStatus/:id')
  updateAccountBlockStatus(
    @Param('id') id: string,
    @CurrentUser() user: UserFromJwt
  ): Promise<UserEntity> {
    return this.usersService.updateAccountBlockStatus(+id, user);
  }
}
