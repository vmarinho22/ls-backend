import { Body, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionInterceptor } from 'src/common/interceptors/permission.interceptor';
import { CreateFrontPermissionDto } from './dto/create-front-permission.dto';
import { UpdateFrontPermissionDto } from './dto/update-front-permission.dto';
import { FrontPermissionsService } from './front-permissions.service';

@ApiTags('Frontend Permissions')
@UseInterceptors(PermissionInterceptor)
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
}
