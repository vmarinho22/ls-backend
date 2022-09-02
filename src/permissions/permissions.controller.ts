import { Body, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PermissionInterceptor } from 'src/common/interceptors/permission.interceptor';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionsService } from './permissions.service';

@ApiTags('Permissions')
@UseInterceptors(PermissionInterceptor)
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @ApiResponse({
    status: 409,
    description: 'Permissão já criada'
  })
  @ApiForbiddenResponse({
    description: 'Acesso negado'
  })
  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @ApiForbiddenResponse({
    description: 'Acesso negado'
  })
  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  @ApiForbiddenResponse({
    description: 'Acesso negado'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

  @ApiForbiddenResponse({
    description: 'Acesso negado'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }
}
