import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from './../../common/errors/types/NotFoundError';
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

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });
    delete user.password;

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password, confirmPassword, permissionId } = updateUserDto;

    const userExists = await this.prisma.user.findUnique({ where: { id } });

    if (!userExists) {
      throw new NotFoundError(`Usuário com ID #${id} não encontrado`);
    }

    if (password || confirmPassword) {
      throw new HttpException('A senha não pode ser atualizada aqui', 400);
    }

    if (permissionId) {
      const permission = await this.prisma.permission.findUnique({
        where: { id: permissionId }
      });

      if (!permission) {
        throw new NotFoundError(`A permissão com ID #${permissionId} não foi encontrada`);
      }
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    });

    delete user.password;

    return user;
  }
}
