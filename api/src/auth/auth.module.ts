import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './presentation/controllers/auth.controller';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case';
import { VerifyOtpUseCase } from './application/use-cases/verify-otp.use-case';
import { LoginUseCase } from './application/use-cases/login.use-case';

import { I_USER_REPOSITORY } from './application/ports/user-repository.port';
import { I_OTP_SERVICE } from './application/ports/otp-service.port';

import { PrismaUserRepository } from './infrastructure/repositories/prisma-user.repository';
import { NodemailerOtpAdapter } from './infrastructure/adapters/nodemailer-otp.adapter';
import { JwtStrategy } from './infrastructure/jwt/jwt.strategy';
import { AUTH_CONSTANTS } from '../common/constants/auth.constants';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || AUTH_CONSTANTS.JWT_DEFAULT_SECRET,
      signOptions: { expiresIn: AUTH_CONSTANTS.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AuthController],
  providers: [
    RegisterUserUseCase,
    VerifyOtpUseCase,
    LoginUseCase,
    JwtStrategy,
    {
      provide: I_USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
    {
      provide: I_OTP_SERVICE,
      useClass: NodemailerOtpAdapter,
    },
  ],
  exports: [JwtModule, PassportModule, JwtStrategy, I_USER_REPOSITORY],
})
export class AuthModule {}
