import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Tunde', description: 'Legal first name' })
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @ApiProperty({ example: 'Adebayor', description: 'Legal last name' })
  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @ApiProperty({ example: 'tunde@example.com', description: 'Verified email identity anchor' })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    example: 'StrongP@ss123!',
    description: 'Password (min 8 chars, 1 uppercase, 1 number, 1 special character)',
  })
  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character',
  })
  password!: string;

  @ApiProperty({ example: '+2348012345678', description: 'WhatsApp phone number with country code' })
  @IsString()
  @IsNotEmpty()
  phone!: string;
}
