import { Body, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PermissionInterceptor } from 'src/common/interceptors/permission.interceptor';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { PermissionEntity } from './entities/permission.entity';
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
  create(@Body() createPermissionDto: CreatePermissionDto): Promise<PermissionEntity> {
    return this.permissionsService.create(createPermissionDto);
  }

  @ApiForbiddenResponse({
    description: 'Acesso negado'
  })
  @Get()
  findAll(): Promise<PermissionEntity[]> {
    return this.permissionsService.findAll();
  }

  @ApiForbiddenResponse({
    description: 'Acesso negado'
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PermissionEntity> {
    return this.permissionsService.findOne(+id);
  }

  @ApiForbiddenResponse({
    description: 'Acesso negado'
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto
  ): Promise<PermissionEntity> {
    return this.permissionsService.update(+id, updatePermissionDto);
  }
}
