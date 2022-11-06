import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionEntity } from './entities/permission.entity';
import { PermissionsRepository } from './repositories/permissions.repository';

@Injectable()
export class PermissionsService {
  constructor(private readonly repository: PermissionsRepository) {}

  create(createPermissionDto: CreatePermissionDto): Promise<PermissionEntity> {
    return this.repository.create(createPermissionDto);
  }

  findAll(): Promise<PermissionEntity[]> {
    return this.repository.findAll();
  }

  findOne(id: number): Promise<PermissionEntity> {
    return this.repository.findOne(id);
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto): Promise<PermissionEntity> {
    return this.repository.update(id, updatePermissionDto);
  }
}
