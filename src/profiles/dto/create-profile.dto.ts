import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsNotEmpty({
    message: 'O nome do usuário não pode ser vazio'
  })
  @IsString({
    message: 'O nome do usuário deve ser do tipo string'
  })
  name: string;

  @ApiProperty({ description: 'Breve descrição sobre o usuário' })
  @IsNotEmpty({
    message: 'O descrição não pode ser vazia'
  })
  @IsString({
    message: 'O descrição deve ser do tipo string'
  })
  about: string;

  @ApiProperty({ description: 'Data de nascimento do usuário' })
  @IsNotEmpty({
    message: 'A data de nascimento do usuário não pode ser vazia'
  })
  @IsDateString({
    message: 'A data de nascimento do usuário deve ser do tipo data'
  })
  birthDate: Date;

  @ApiProperty({ description: 'Local de nascimento do usuário' })
  @IsNotEmpty({
    message: 'O local de nascimento do usuário não pode ser vazio'
  })
  @IsString({
    message: 'O local de nascimento do usuário deve ser do tipo string'
  })
  naturalness: string;

  @ApiProperty({ description: 'ID do cargo do usuário' })
  @IsNotEmpty({
    message: 'O ID do cargo do usuário não pode ser vazio'
  })
  @IsNumber(
    {},
    {
      message: 'O ID do cargo do usuário deve ser do tipo number'
    }
  )
  roleId: number;

  @ApiProperty({ description: 'ID do usuário vinculado a esse perfil' })
  @IsNotEmpty({
    message: 'O ID do usuário vinculado não pode ser vazio'
  })
  @IsNumber(
    {},
    {
      message: 'O ID do usuário vinculado deve ser do tipo number'
    }
  )
  userId: number;
}
