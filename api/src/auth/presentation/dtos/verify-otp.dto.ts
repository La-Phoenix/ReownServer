import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({ example: 'tunde@example.com', description: 'Email address' })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ example: '582914', description: '6-digit OTP code sent via email' })
  @IsString()
  @Length(6, 6, { message: 'OTP code must be exactly 6 digits' })
  code!: string;
}
