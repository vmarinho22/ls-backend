import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './../dto/create-user.dto';
import { UpdateUserDto } from './../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { confirmPassword, permissionId } = createUserDto;
    delete createUserDto.confirmPassword;

    if (createUserDto.password !== confirmPassword) {
      throw new Error('As senhas devem ser iguais');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    if (permissionId) {
      const permission = await this.prisma.permission.findUnique({
        where: { id: permissionId }
      });

      if (!permission) {
        throw new NotFoundException(`A permissão com ID #${permissionId} não foi encontrada`);
      }
    }

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        username: createUserDto.email.split('@')[0],
        password: hashedPassword
      }
    });

    delete user.password;

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users.map(user => {
      delete user.password;
      return user;
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
