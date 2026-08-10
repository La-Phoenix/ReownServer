import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../../presentation/dtos/login.dto';
import { AuthResponseDto } from '../../presentation/dtos/auth-response.dto';
import { I_USER_REPOSITORY, type IUserRepository } from '../ports/user-repository.port';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(I_USER_REPOSITORY) private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findByEmail(dto.email.toLowerCase());
    if (!user) {
      throw new UnauthorizedException('Invalid email address or password');
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email address or password');
    }

    if (user.suspendedUntil && new Date() < user.suspendedUntil) {
      throw new UnauthorizedException('Your account is currently suspended due to policy violations');
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
