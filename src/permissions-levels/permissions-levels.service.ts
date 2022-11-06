import { Injectable } from '@nestjs/common';
import { CreatePermissionsLevelDto } from './dto/create-permissions-level.dto';
import { UpdatePermissionsLevelDto } from './dto/update-permissions-level.dto';
import { PermissionsLevelEntity } from './entities/permissions-level.entity';
import { PermissionsLevelsRepository } from './repositories/permissions-levels.repository';

@Injectable()
export class PermissionsLevelsService {
  constructor(private readonly repository: PermissionsLevelsRepository) {}

  create(createPermissionsLevelDto: CreatePermissionsLevelDto): Promise<PermissionsLevelEntity> {
    return this.repository.create(createPermissionsLevelDto);
  }

  findAll(): Promise<PermissionsLevelEntity[]> {
    return this.repository.findAll();
  }

  findOne(id: number): Promise<PermissionsLevelEntity> {
    return this.repository.findOne(id);
  }

  update(
    id: number,
    updatePermissionsLevelDto: UpdatePermissionsLevelDto
  ): Promise<PermissionsLevelEntity> {
    return this.repository.update(id, updatePermissionsLevelDto);
  }

  remove(id: number): Promise<PermissionsLevelEntity> {
    return this.repository.remove(id);
  }
}
