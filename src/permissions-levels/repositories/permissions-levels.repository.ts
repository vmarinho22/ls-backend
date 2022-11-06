import { Injectable, NotFoundException } from '@nestjs/common';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissionsLevelDto } from '../dto/create-permissions-level.dto';
import { UpdatePermissionsLevelDto } from '../dto/update-permissions-level.dto';
import { PermissionsLevelEntity } from '../entities/permissions-level.entity';
import { NotFoundError } from './../../common/errors/types/NotFoundError';

@Injectable()
export class PermissionsLevelsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPermissionsLevelDto: CreatePermissionsLevelDto
  ): Promise<PermissionsLevelEntity> {
    const { permissionId } = createPermissionsLevelDto;

    const permission: PermissionEntity = await this.prisma.permission.findUnique({
      where: { id: permissionId }
    });

    if (!permission) {
      throw new NotFoundError(`A permissão com ID #${permissionId} não foi encontrada`);
    }

    return this.prisma.permissionLevel.create({
      data: createPermissionsLevelDto
    });
  }

  async findAll(): Promise<PermissionsLevelEntity[]> {
    return this.prisma.permissionLevel.findMany();
  }

  async findOne(id: number): Promise<PermissionsLevelEntity> {
    return this.prisma.permissionLevel.findUniqueOrThrow({
      where: { id }
    });
  }

  async update(
    id: number,
    updatePermissionsLevelDto: UpdatePermissionsLevelDto
  ): Promise<PermissionsLevelEntity> {
    const { permissionId } = updatePermissionsLevelDto;

    const permissionLevel: PermissionsLevelEntity = await this.prisma.permissionLevel.findUnique({
      where: { id }
    });

    if (!permissionLevel) {
      throw new NotFoundError(`A permissão com ID #${id} não foi encontrada`);
    }

    if (permissionId) {
      const permission: PermissionEntity = await this.prisma.permission.findUnique({
        where: { id: permissionId }
      });

      if (!permission) {
        throw new NotFoundException(`A permissão com ID #${permissionId} não foi encontrada`);
      }
    }

    return this.prisma.permissionLevel.update({
      where: { id },
      data: updatePermissionsLevelDto
    });
  }

  async remove(id: number): Promise<PermissionsLevelEntity> {
    const permissionLevel: PermissionsLevelEntity = await this.prisma.permissionLevel.findUnique({
      where: { id }
    });

    if (!permissionLevel) {
      throw new NotFoundError(`A permissão com ID #${id} não foi encontrada`);
    }
    return this.prisma.permissionLevel.delete({
      where: { id }
    });
  }
}
