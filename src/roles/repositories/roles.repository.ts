import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './../dto/create-role.dto';
import { UpdateRoleDto } from './../dto/update-role.dto';
import { RoleEntity } from './../entities/role.entity';

@Injectable()
export class RolesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    return this.prisma.role.create({
      data: createRoleDto
    });
  }

  async findAll(): Promise<RoleEntity[]> {
    return this.prisma.role.findMany();
  }

  async findOne(id: number): Promise<RoleEntity> {
    return this.prisma.role.findUnique({ where: { id } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    return this.prisma.role.update({
      where: { id },
      data: updateRoleDto
    });
  }
}
