import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity } from './entities/role.entity';
import { RolesRepository } from './repositories/roles.repository';

@Injectable()
export class RolesService {
  constructor(private readonly repository: RolesRepository) {}

  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    return this.repository.create(createRoleDto);
  }

  async findAll(): Promise<RoleEntity[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<RoleEntity> {
    return this.repository.findOne(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    return this.repository.update(id, updateRoleDto);
  }
}
