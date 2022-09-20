import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFrontPermissionDto {
  @ApiProperty({ description: 'Url base da página' })
  @IsNotEmpty({
    message: 'Url base da página não pode ser vazio'
  })
  @IsString({
    message: 'Url base da página deve ser do tipo string'
  })
  page: string;

  @ApiProperty({ description: 'Título da ação' })
  @IsNotEmpty({
    message: 'Título da ação não pode ser vazio'
  })
  @IsString({
    message: 'Título da ação deve ser do tipo string'
  })
  action: string;

  @ApiProperty({ description: 'Permissão da ação' })
  @IsNotEmpty({
    message: 'Permissão da ação não pode ser vazio'
  })
  @IsBoolean({
    message: 'Permissão da ação deve ser do tipo string'
  })
  permitted: boolean;

  @ApiProperty({ description: 'ID do usuário' })
  @IsNotEmpty({
    message: 'ID do usuário não pode ser vazio'
  })
  @IsNumber(
    {},
    {
      message: 'ID do usuário deve ser do tipo string'
    }
  )
  userId: number;
}
