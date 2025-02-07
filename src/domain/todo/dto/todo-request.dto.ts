import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class TodoRequest {
  /**
   * name
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * email
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
