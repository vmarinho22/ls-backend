import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class CreateTrainingsHistoryDto {
  @ApiProperty({ description: 'ID do usuário que realizou o treinamento' })
  @IsNotEmpty({
    message: 'ID do usuário não pode ser vazio'
  })
  @IsNumber(
    {},
    {
      message: 'ID do usuário deve ser do tipo número'
    }
  )
  userId: number;

  @ApiProperty({ description: 'ID do treinamento que foi realizado pelo usuário' })
  @IsNotEmpty({
    message: 'ID do treinamento não pode ser vazio'
  })
  @IsNumber(
    {},
    {
      message: 'ID do treinamento deve ser do tipo número'
    }
  )
  trainingId: number;

  @ApiProperty({ description: 'Data da conclusão do treinamento' })
  @IsNotEmpty({
    message: 'A data da conclusão não pode ser vazio'
  })
  @Type(() => Date)
  @IsDate({
    message: 'A data da conclusão deve ser do tipo data'
  })
  endedIn: Date;

  @ApiProperty({ description: 'Url do certificado' })
  @IsOptional()
  @IsUrl(
    {},
    {
      message: 'A Url do certificado deve ser uma url'
    }
  )
  certificateUrl: string;
}
