import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterDto } from '../dtos/register.dto';
import { VerifyOtpDto } from '../dtos/verify-otp.dto';
import { LoginDto } from '../dtos/login.dto';
import { AuthResponseDto } from '../dtos/auth-response.dto';
import { RegisterResponseDto } from '../dtos/register-response.dto';
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case';
import { VerifyOtpUseCase } from '../../application/use-cases/verify-otp.use-case';
import { LoginUseCase } from '../../application/use-cases/login.use-case';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly verifyOtpUseCase: VerifyOtpUseCase,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user account' })
  @ApiResponse({
    status: 201,
    description: 'User created. Verification OTP code sent to email.',
    type: RegisterResponseDto,
  })
  register(@Body() dto: RegisterDto): Promise<RegisterResponseDto> {
    return this.registerUserUseCase.execute(dto);
  }

  @Post('verify-otp')
  @ApiOperation({ summary: 'Verify email registration 6-digit OTP code' })
  @ApiResponse({
    status: 200,
    description: 'Email verified. Returns JWT access token.',
    type: AuthResponseDto,
  })
  verifyOtp(@Body() dto: VerifyOtpDto): Promise<AuthResponseDto> {
    return this.verifyOtpUseCase.execute(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in with email and password' })
  @ApiResponse({
    status: 200,
    description: 'User authenticated successfully. Returns JWT access token.',
    type: AuthResponseDto,
  })
  login(@Body() dto: LoginDto): Promise<AuthResponseDto> {
    return this.loginUseCase.execute(dto);
  }
}
