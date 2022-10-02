import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from '../entities/user.entity';
import { UserFromJwt } from './../../auth/models/UserFromJwt';
import { NotFoundError } from './../../common/errors/types/NotFoundError';
import { UnauthorizedError } from './../../common/errors/types/UnauthorizedError';
import { PermissionEntity } from './../../permissions/entities/permission.entity';
import { CreateUserDto } from './../dto/create-user.dto';
import { UpdateUserDto } from './../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
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

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany({
      include: {
        permission: true,
        profile: true
      }
    });
    return users.map(user => {
      delete user.password;
      return user;
    });
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        permission: true,
        profile: true
      }
    });
    delete user.password;

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const { password, confirmPassword, permissionId } = updateUserDto;

    const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id } });

    if (!userExists) {
      throw new NotFoundError(`Usuário com ID #${id} não encontrado`);
    }

    if (password || confirmPassword) {
      throw new HttpException('A senha não pode ser atualizada aqui', 400);
    }

    if (permissionId) {
      const permission: PermissionEntity = await this.prisma.permission.findUnique({
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

  async updateAdminStatus(id: number, userFromRequest: UserFromJwt): Promise<UserEntity> {
    const userToCheckIfIsSuperAdmin: UserEntity = await this.prisma.user.findUnique({
      where: { id: userFromRequest.id }
    });

    if (userToCheckIfIsSuperAdmin.isSuperAdmin === false) {
      throw new UnauthorizedError(
        `O usuário que pediu a transformação de super usuário não tem essa permissão`
      );
    }

    const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id } });

    if (!userExists) {
      throw new NotFoundError(`Usuário com ID #${id} não encontrado`);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        isSuperAdmin: !userExists.isSuperAdmin
      }
    });

    delete user.password;

    return user;
  }

  async updateAccountBlockStatus(id: number, userFromRequest: UserFromJwt): Promise<UserEntity> {
    const userToCheckIfIsSuperAdmin: UserEntity = await this.prisma.user.findUnique({
      where: { id: userFromRequest.id }
    });

    if (userToCheckIfIsSuperAdmin.isSuperAdmin === false) {
      throw new UnauthorizedError(`O usuário que pediu o bloqueio não tem essa permissão`);
    }

    const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id } });

    if (!userExists) {
      throw new NotFoundError(`Usuário com ID #${id} não encontrado`);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        isBlocked: !userExists.isBlocked
      }
    });

    delete user.password;

    return user;
  }
}
