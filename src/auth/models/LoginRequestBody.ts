import { IsString } from 'class-validator';

export class LoginRequestBody {
  @IsString({
    message: 'O usuário deve ser do tipo string'
  })
  username: string;

  @IsString({
    message: 'A senha deve ser do tipo string'
  })
  password: string;
}
