import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissionsLevelDto } from '../dto/create-permissions-level.dto';
import { UpdatePermissionsLevelDto } from '../dto/update-permissions-level.dto';
import { PermissionsLevelEntity } from '../entities/permissions-level.entity';

@Injectable()
export class PermissionsLevelsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPermissionsLevelDto: CreatePermissionsLevelDto
  ): Promise<PermissionsLevelEntity> {
    const { permissionId } = createPermissionsLevelDto;

    const permission = await this.prisma.permission.findUnique({
      where: { id: permissionId }
    });

    if (!permission) {
      throw new NotFoundException(`A permissão com ID #${permissionId} não foi encontrada`);
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

  async update(id: number, updatePermissionsLevelDto: UpdatePermissionsLevelDto) {
    const { permissionId } = updatePermissionsLevelDto;

    if (permissionId) {
      const permission = await this.prisma.permission.findUnique({
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

  remove(id: number) {
    return this.prisma.permissionLevel.delete({
      where: { id }
    });
  }
}
