import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionsLevelsService } from './permissions-levels.service';
import { CreatePermissionsLevelDto } from './dto/create-permissions-level.dto';
import { UpdatePermissionsLevelDto } from './dto/update-permissions-level.dto';

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
