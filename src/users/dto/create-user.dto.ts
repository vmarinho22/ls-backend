import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'E-mail do usuário' })
  @IsNotEmpty({
    message: 'O email não pode ser vazio'
  })
  @IsEmail({
    message: 'Email inválido'
  })
  email: string;

  @ApiProperty({
    description:
      'Senha do usuário(caractere min: 8, max: 32, min 1 letra maiúscula, min 1 número, min 1 caractere especial'
  })
  @IsString({
    message: 'A senha deve ser do tipo string'
  })
  @IsNotEmpty({
    message: 'A senha não pode ser vazia'
  })
  @MinLength(8, {
    message: 'A senha deve conter no mínimo 8 caracteres'
  })
  @MaxLength(32, {
    message: 'A senha deve conter no máximo 32 caracteres'
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'A senha deve conter pelo menos: 1 caractere maiúscula, 1 número e 1 caractere especial'
  })
  password: string;

  @ApiProperty({ description: 'Confirmação da senha do usuário' })
  @IsString({
    message: 'A confirmação da senha deve ser do tipo string'
  })
  @MinLength(8, {
    message: 'A confirmação da senha deve conter no mínimo 8 caracteres'
  })
  @MaxLength(32, {
    message: 'A confirmação da senha deve conter no máximo 32 caracteres'
  })
  confirmPassword: string;

  @ApiProperty({ description: 'Condição de bloqueio do usuário' })
  @IsOptional()
  @IsBoolean({
    message: 'O campo de bloqueio deve ser do tipo boolean'
  })
  isBlocked?: boolean;

  @ApiProperty({ description: 'ID da permissão que esse usuário terá no sistema' })
  @IsOptional()
  @IsNumber(
    {},
    {
      message: 'O campo permissionId deve ser do tipo number'
    }
  )
  permissionId: number;
}
