import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';

export enum IdentityDocumentType {
  NIN = 'NIN',
  BVN = 'BVN',
}

export class VerifyIdentityDto {
  @ApiProperty({ example: 'NIN', enum: IdentityDocumentType, description: 'Type of identity document (NIN or BVN)' })
  @IsEnum(IdentityDocumentType)
  @IsNotEmpty()
  idType!: IdentityDocumentType;

  @ApiProperty({ example: '12345678901', description: '11-digit NIN or BVN number' })
  @IsString()
  @Length(11, 11, { message: 'NIN or BVN number must be exactly 11 digits' })
  idNumber!: string;
}
