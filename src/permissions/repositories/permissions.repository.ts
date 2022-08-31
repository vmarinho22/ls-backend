import { Injectable } from '@nestjs/common';
import { NotFoundError } from './../../common/errors/types/NotFoundError';
import { PrismaService } from './../../prisma/prisma.service';
import { CreatePermissionDto } from './../dto/create-permission.dto';
import { UpdatePermissionDto } from './../dto/update-permission.dto';
import { PermissionEntity } from './../entities/permission.entity';

@Injectable()
export class PermissionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createPermissionDto: CreatePermissionDto): Promise<PermissionEntity> {
    const { title, permissions } = createPermissionDto;
    return this.prisma.permission.create({
      data: {
        title,
        permissionLevel: {
          create: permissions
        }
      },
      include: {
        permissionLevel: true
      }
    });
  }

  findAll(): Promise<PermissionEntity[]> {
    return this.prisma.permission.findMany({
      include: {
        permissionLevel: true
      }
    });
  }

  findOne(id: number): Promise<PermissionEntity> {
    return this.prisma.permission.findUnique({
      where: {
        id
      },
      include: {
        permissionLevel: true
      }
    });
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto): Promise<PermissionEntity> {
    const permissionExists = await this.prisma.permission.findUnique({ where: { id } });

    if (!permissionExists) {
      throw new NotFoundError(`A permissão com ID #${id} não foi encontrada`);
    }

    return this.prisma.permission.update({
      where: {
        id
      },
      data: updatePermissionDto,
      include: {
        permissionLevel: true
      }
    });
  }
}
