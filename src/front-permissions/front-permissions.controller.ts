import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrontPermissionsService } from './front-permissions.service';
import { CreateFrontPermissionDto } from './dto/create-front-permission.dto';
import { UpdateFrontPermissionDto } from './dto/update-front-permission.dto';

@Controller('front-permissions')
export class FrontPermissionsController {
  constructor(private readonly frontPermissionsService: FrontPermissionsService) {}

  @Post()
  create(@Body() createFrontPermissionDto: CreateFrontPermissionDto) {
    return this.frontPermissionsService.create(createFrontPermissionDto);
  }

  @Get()
  findAll() {
    return this.frontPermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frontPermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrontPermissionDto: UpdateFrontPermissionDto) {
    return this.frontPermissionsService.update(+id, updateFrontPermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frontPermissionsService.remove(+id);
  }
}
