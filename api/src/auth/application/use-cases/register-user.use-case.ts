import { ConflictException, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../../presentation/dtos/register.dto';
import { RegisterResponseDto } from '../../presentation/dtos/register-response.dto';
import { I_USER_REPOSITORY, type IUserRepository } from '../ports/user-repository.port';
import { I_OTP_SERVICE, type IOtpService } from '../ports/otp-service.port';
import { AUTH_CONSTANTS } from '../../../common/constants/auth.constants';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject(I_USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(I_OTP_SERVICE) private readonly otpService: IOtpService,
  ) {}

  async execute(dto: RegisterDto): Promise<RegisterResponseDto> {
    const existingUser = await this.userRepository.findByEmail(dto.email.toLowerCase());
    if (existingUser) {
      throw new ConflictException('An account with this email address already exists');
    }

    const passwordHash = await bcrypt.hash(dto.password, AUTH_CONSTANTS.PASSWORD_SALT_ROUNDS);

    await this.userRepository.create({
      email: dto.email.toLowerCase(),
      passwordHash,
      firstName: dto.firstName,
      lastName: dto.lastName,
      phone: dto.phone,
    });

    const code = await this.otpService.generateAndSendOtp(dto.email);

    return {
      message: `Account created. Verification OTP code sent to ${dto.email} (Debug code: ${code})`,
      email: dto.email.toLowerCase(),
    };
  }
}
