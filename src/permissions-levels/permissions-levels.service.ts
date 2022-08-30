import { Injectable } from '@nestjs/common';
import { CreatePermissionsLevelDto } from './dto/create-permissions-level.dto';
import { UpdatePermissionsLevelDto } from './dto/update-permissions-level.dto';

@Injectable()
export class PermissionsLevelsService {
  create(createPermissionsLevelDto: CreatePermissionsLevelDto) {
    return 'This action adds a new permissionsLevel';
  }

  findAll() {
    return `This action returns all permissionsLevels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permissionsLevel`;
  }

  update(id: number, updatePermissionsLevelDto: UpdatePermissionsLevelDto) {
    return `This action updates a #${id} permissionsLevel`;
  }

  remove(id: number) {
    return `This action removes a #${id} permissionsLevel`;
  }
}
