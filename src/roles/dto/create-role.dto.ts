import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ description: 'Título do cargo' })
  @IsNotEmpty({
    message: 'O Título do cargo não pode ser vazio'
  })
  @IsString({
    message: 'O Título do cargo deve ser do tipo string'
  })
  title: string;

  @ApiProperty({ description: 'Descrição do cargo' })
  @IsOptional()
  @IsString({
    message: 'A descrição do cargo deve ser do tipo string'
  })
  description: string | null;
}
