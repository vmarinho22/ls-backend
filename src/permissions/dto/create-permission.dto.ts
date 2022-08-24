import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({ description: 'Título da permissão' })
  @IsString()
  @IsNotEmpty()
  title: string;
}
