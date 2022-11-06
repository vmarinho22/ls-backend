import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTrainingDto {
  @ApiProperty({ description: 'Título do treinamento' })
  @IsNotEmpty({
    message: 'Título do treinamento não pode ser vazio'
  })
  @IsString({
    message: 'Título do treinamento deve ser do tipo string'
  })
  name: string;

  @ApiProperty({ description: 'Descrição do treinamento' })
  @IsOptional()
  @IsString({
    message: 'A descrição deve ser do tipo string'
  })
  description: string;

  @IsNotEmpty({
    message: 'A validade do treinamento não pode ser vazia'
  })
  @IsNumber(
    {},
    {
      message: 'Título do treinamento deve ser do tipo string'
    }
  )
  @ApiProperty({ description: 'Validade do treinamento (*em meses)' })
  validity: number;
}
