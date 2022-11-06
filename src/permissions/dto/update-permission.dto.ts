import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePermissionDto {
  @ApiProperty({ description: 'Título da permissão' })
  @IsString({
    message: 'Título da permissão deve ser do tipo string'
  })
  @IsNotEmpty({
    message: 'Título da permissão não pode ser vazio'
  })
  title: string;
}
