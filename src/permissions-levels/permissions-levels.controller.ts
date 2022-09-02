import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionInterceptor } from 'src/common/interceptors/permission.interceptor';
import { CreatePermissionsLevelDto } from './dto/create-permissions-level.dto';
import { UpdatePermissionsLevelDto } from './dto/update-permissions-level.dto';
import { PermissionsLevelsService } from './permissions-levels.service';

@ApiTags('Permissions Levels')
@UseInterceptors(PermissionInterceptor)
@Controller('permissions-levels')
export class PermissionsLevelsController {
  constructor(private readonly permissionsLevelsService: PermissionsLevelsService) {}

  @Post()
  create(@Body() createPermissionsLevelDto: CreatePermissionsLevelDto) {
    return this.permissionsLevelsService.create(createPermissionsLevelDto);
  }

  @Get()
  findAll() {
    return this.permissionsLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionsLevelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionsLevelDto: UpdatePermissionsLevelDto) {
    return this.permissionsLevelsService.update(+id, updatePermissionsLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionsLevelsService.remove(+id);
  }
}
