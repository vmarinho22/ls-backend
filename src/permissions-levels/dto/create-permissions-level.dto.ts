import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePermissionsLevelDto {
  @ApiProperty({ description: 'Página da permissão' })
  @IsNotEmpty({
    message: 'A página da permissão não pode ser vazio'
  })
  @IsString({
    message: 'A página da permissão deve ser do tipo string'
  })
  page: string;

  @ApiProperty({ description: 'Permissão de criar' })
  @IsNotEmpty({
    message: 'A permissão de criar não pode ser vazio'
  })
  @IsBoolean({
    message: 'A permissão de criar deve ser do tipo booleano'
  })
  create: boolean;

  @ApiProperty({ description: 'Permissão de ler' })
  @IsNotEmpty({
    message: 'A permissão de ler não pode ser vazio'
  })
  @IsBoolean({
    message: 'A permissão de ler deve ser do tipo booleano'
  })
  read: boolean;

  @ApiProperty({ description: 'Permissão de atualizar' })
  @IsNotEmpty({
    message: 'A permissão de atualizar não pode ser vazio'
  })
  @IsBoolean({
    message: 'A permissão de atualizar deve ser do tipo booleano'
  })
  update: boolean;

  @ApiProperty({ description: 'Permissão de deletar' })
  @IsNotEmpty({
    message: 'A permissão de deletar não pode ser vazio'
  })
  @IsBoolean({
    message: 'A permissão de deletar deve ser do tipo booleano'
  })
  delete: boolean;

  @ApiProperty({ description: 'ID de vínculo com a permissão' })
  @IsNotEmpty({
    message: 'ID de vínculo não pode ser vazio'
  })
  @IsNumber(
    {},
    {
      message: 'ID de vínculo deve ser do tipo número'
    }
  )
  permissionId: number;
}
