import { IsNotEmpty, IsString } from 'class-validator';

export class userDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  ss: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
