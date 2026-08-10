import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto {
  @ApiProperty({
    example: 'Account created. Verification OTP code sent to tunde@example.com',
    description: 'Status message indicating registration success and OTP dispatch',
  })
  message!: string;

  @ApiProperty({
    example: 'tunde@example.com',
    description: 'Email identity anchor address',
  })
  email!: string;
}
