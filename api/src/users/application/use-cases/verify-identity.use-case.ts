import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { VerificationTier } from '@prisma/client';
import { IdentityDocumentType, VerifyIdentityDto } from '../../presentation/dtos/verify-identity.dto';
import { I_USER_REPOSITORY, type IUserRepository } from '../../../auth/application/ports/user-repository.port';
import { I_KYC_PROVIDER, type IKycProvider } from '../ports/kyc-provider.port';

@Injectable()
export class VerifyIdentityUseCase {
  constructor(
    @Inject(I_USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(I_KYC_PROVIDER) private readonly kycProvider: IKycProvider,
  ) {}

  async execute(userId: string, dto: VerifyIdentityDto): Promise<{ message: string; tier: string }> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User account not found');
    }

    let kycResult;
    if (dto.idType === IdentityDocumentType.NIN) {
      kycResult = await this.kycProvider.verifyNin(dto.idNumber);
    } else {
      kycResult = await this.kycProvider.verifyBvn(dto.idNumber);
    }

    if (!kycResult.verified) {
      throw new BadRequestException(`Identity verification failed: ${kycResult.message}`);
    }

    const ninVerified = dto.idType === IdentityDocumentType.NIN ? true : user.ninVerified;
    const bvnVerified = dto.idType === IdentityDocumentType.BVN ? true : user.bvnVerified;

    await this.userRepository.updateVerificationStatus(userId, ninVerified, bvnVerified, VerificationTier.VERIFIED);

    return {
      message: `${dto.idType} identity verification successful. Account upgraded to ${VerificationTier.VERIFIED} tier.`,
      tier: VerificationTier.VERIFIED,
    };
  }
}
