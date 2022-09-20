import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersRepository } from './repositories/users.repository';
import { UserFromJwt } from './../auth/models/UserFromJwt';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}
  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.repository.create(createUserDto);
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.findAll();
  }

  findOne(id: number): Promise<UserEntity> {
    return this.repository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.repository.update(id, updateUserDto);
  }

  updateAdminStatus(id: number, user: UserFromJwt): Promise<UserEntity> {
    return this.repository.updateAdminStatus(id, user);
  }
}
