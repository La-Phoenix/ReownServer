import { ApiProperty } from '@nestjs/swagger';

export class UserProfileResponseDto {
  @ApiProperty({ example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' })
  id!: string;

  @ApiProperty({ example: 'tunde@example.com' })
  email!: string;

  @ApiProperty({ example: 'Tunde' })
  firstName!: string;

  @ApiProperty({ example: 'Adebayor' })
  lastName!: string;

  @ApiProperty({ example: '+2348012345678' })
  phone!: string;

  @ApiProperty({ example: 'BOTH', enum: ['BUY', 'SELL', 'BOTH'] })
  role!: string;

  @ApiProperty({ example: 'CASUAL', enum: ['CASUAL', 'PRO'] })
  sellerType!: string;

  @ApiProperty({ example: 'BASIC', enum: ['BASIC', 'VERIFIED', 'PRO'] })
  verificationTier!: string;

  @ApiProperty({ example: false })
  ninVerified!: boolean;

  @ApiProperty({ example: false })
  bvnVerified!: boolean;
}

export class AuthResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  accessToken!: string;

  @ApiProperty({ type: UserProfileResponseDto })
  user!: UserProfileResponseDto;
}
