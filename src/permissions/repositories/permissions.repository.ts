import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { CreatePermissionDto } from './../dto/create-permission.dto';
import { UpdatePermissionDto } from './../dto/update-permission.dto';
import { PermissionEntity } from './../entities/permission.entity';

@Injectable()
export class PermissionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createPermissionDto: CreatePermissionDto): Promise<PermissionEntity> {
    return this.prisma.permission.create({
      data: createPermissionDto
    });
  }

  findAll(): Promise<PermissionEntity[]> {
    return this.prisma.permission.findMany();
  }

  findOne(id: number): Promise<PermissionEntity> {
    return this.prisma.permission.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto): Promise<PermissionEntity> {
    return this.prisma.permission.update({
      where: {
        id
      },
      data: updatePermissionDto
    });
  }
}
