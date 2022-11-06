import { Injectable } from '@nestjs/common';
import { CreateFrontPermissionDto } from './dto/create-front-permission.dto';
import { UpdateFrontPermissionDto } from './dto/update-front-permission.dto';
import { FrontPermissionEntity } from './entities/front-permission.entity';
import { FrontPermissionsRepository } from './repositories/front-permissions.repository';

@Injectable()
export class FrontPermissionsService {
  constructor(private readonly repository: FrontPermissionsRepository) {}

  async create(createFrontPermissionDto: CreateFrontPermissionDto): Promise<FrontPermissionEntity> {
    return this.repository.create(createFrontPermissionDto);
  }

  async findAll(): Promise<FrontPermissionEntity[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<FrontPermissionEntity> {
    return this.repository.findOne(id);
  }

  async update(
    id: number,
    updateFrontPermissionDto: UpdateFrontPermissionDto
  ): Promise<FrontPermissionEntity> {
    return this.repository.update(id, updateFrontPermissionDto);
  }
}
