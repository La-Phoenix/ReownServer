import { Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from '../../application/services/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user account' })
  @ApiResponse({ status: 201, description: 'User account created successfully' })
  register(): Promise<{ message: string }> {
    return this.authService.register();
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in with email and password' })
  @ApiResponse({ status: 200, description: 'User logged in successfully' })
  login(): Promise<{ message: string }> {
    return this.authService.login();
  }

  @Post('verify-otp')
  @ApiOperation({ summary: 'Verify email registration OTP code' })
  @ApiResponse({ status: 200, description: 'Email verified successfully' })
  verifyOtp(): Promise<{ message: string }> {
    return this.authService.verifyOtp();
  }
}
