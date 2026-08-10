import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(): Promise<{ message: string }> {
    return { message: 'Register endpoint' };
  }

  async login(): Promise<{ message: string }> {
    return { message: 'Login endpoint' };
  }

  async verifyOtp(): Promise<{ message: string }> {
    return { message: 'Verify OTP endpoint' };
  }
}
