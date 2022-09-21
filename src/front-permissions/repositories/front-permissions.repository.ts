import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { NotFoundError } from './../../common/errors/types/NotFoundError';
import { PrismaService } from './../../prisma/prisma.service';
import { CreateFrontPermissionDto } from './../dto/create-front-permission.dto';
import { UpdateFrontPermissionDto } from './../dto/update-front-permission.dto';
import { FrontPermissionEntity } from './../entities/front-permission.entity';

@Injectable()
export class FrontPermissionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFrontPermissionDto: CreateFrontPermissionDto): Promise<FrontPermissionEntity> {
    const { userId } = createFrontPermissionDto;

    const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!userExists) {
      throw new NotFoundError(`Usuário com ID #${userId} não encontrado`);
    }

    return this.prisma.frontPermission.create({
      data: createFrontPermissionDto
    });
  }

  async findAll(): Promise<FrontPermissionEntity[]> {
    return this.prisma.frontPermission.findMany();
  }

  async findOne(id: number): Promise<FrontPermissionEntity> {
    return this.prisma.frontPermission.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateFrontPermissionDto: UpdateFrontPermissionDto
  ): Promise<FrontPermissionEntity> {
    const FrontPermissionExits: FrontPermissionEntity =
      await this.prisma.frontPermission.findUnique({
        where: { id }
      });

    if (!FrontPermissionExits) {
      throw new NotFoundError(`Permissão do Front com ID #${id} não encontrado`);
    }

    const { userId } = updateFrontPermissionDto;

    if (userId) {
      const userExists: UserEntity = await this.prisma.user.findUnique({ where: { id } });

      if (!userExists) {
        throw new NotFoundError(`Usuário com ID #${id} não encontrado`);
      }
    }

    return this.prisma.frontPermission.update({
      where: { id },
      data: updateFrontPermissionDto
    });
  }
}
