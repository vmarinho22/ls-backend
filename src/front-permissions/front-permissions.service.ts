import { Injectable } from '@nestjs/common';
import { CreateFrontPermissionDto } from './dto/create-front-permission.dto';
import { UpdateFrontPermissionDto } from './dto/update-front-permission.dto';

@Injectable()
export class FrontPermissionsService {
  create(createFrontPermissionDto: CreateFrontPermissionDto) {
    return 'This action adds a new frontPermission';
  }

  findAll() {
    return `This action returns all frontPermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frontPermission`;
  }

  update(id: number, updateFrontPermissionDto: UpdateFrontPermissionDto) {
    return `This action updates a #${id} frontPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} frontPermission`;
  }
}
