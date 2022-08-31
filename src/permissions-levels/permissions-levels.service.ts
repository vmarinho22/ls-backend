import { Injectable } from '@nestjs/common';
import { CreatePermissionsLevelDto } from './dto/create-permissions-level.dto';
import { UpdatePermissionsLevelDto } from './dto/update-permissions-level.dto';
import { PermissionsLevelsRepository } from './repositories/permissions-levels.repository';

@Injectable()
export class PermissionsLevelsService {
  constructor(private readonly repository: PermissionsLevelsRepository) {}

  create(createPermissionsLevelDto: CreatePermissionsLevelDto) {
    return this.repository.create(createPermissionsLevelDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePermissionsLevelDto: UpdatePermissionsLevelDto) {
    return this.repository.update(id, updatePermissionsLevelDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
