import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'tunde@example.com', description: 'User account email' })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: 'StrongP@ss123!', description: 'User account password' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}
