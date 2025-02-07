import { IsEmail, IsOptional, IsString } from 'class-validator';

export class TodoUpdateRequest {
  /**
   * name
   */
  @IsString()
  @IsOptional()
  name: string;

  /**
   * email
   */
  @IsEmail()
  @IsOptional()
  email: string;
}
