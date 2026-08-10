import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { VerifyOtpDto } from '../../presentation/dtos/verify-otp.dto';
import { AuthResponseDto } from '../../presentation/dtos/auth-response.dto';
import { I_USER_REPOSITORY, type IUserRepository } from '../ports/user-repository.port';
import { I_OTP_SERVICE, type IOtpService } from '../ports/otp-service.port';

@Injectable()
export class VerifyOtpUseCase {
  constructor(
    @Inject(I_USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(I_OTP_SERVICE) private readonly otpService: IOtpService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: VerifyOtpDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findByEmail(dto.email.toLowerCase());
    if (!user) {
      throw new NotFoundException('Account not found');
    }

    const isValid = await this.otpService.verifyOtp(dto.email, dto.code);
    if (!isValid) {
      throw new BadRequestException('Invalid or expired OTP code');
    }

    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone ?? '',
        role: user.role,
        sellerType: user.sellerType,
        verificationTier: user.verificationTier,
        ninVerified: user.ninVerified,
        bvnVerified: user.bvnVerified,
      },
    };
  }
}
