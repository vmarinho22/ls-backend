import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

interface PermissionsLevels {
  page: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export class CreatePermissionDto {
  @ApiProperty({ description: 'Título da permissão' })
  @IsString({
    message: 'Título da permissão deve ser do tipo string'
  })
  @IsNotEmpty({
    message: 'Título da permissão não pode ser vazio'
  })
  title: string;

  @ApiProperty({
    description: 'Permissões desse grupo',
    example: {
      page: 'string',
      create: 'boolean',
      read: 'boolean',
      update: 'boolean',
      delete: 'boolean'
    }
  })
  @IsNotEmpty({
    message: 'As permissões não podem ser vazias'
  })
  @IsArray({
    message: 'As permissões do array devem ser do tipo array'
  })
  permissions: PermissionsLevels[];
}
