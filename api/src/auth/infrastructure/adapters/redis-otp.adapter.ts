import { Injectable } from '@nestjs/common';
import { IOtpService } from '../../application/ports/otp-service.port';
import { AUTH_CONSTANTS } from '../../../common/constants/auth.constants';

@Injectable()
export class MemoryOtpAdapter implements IOtpService {
  private readonly otpStore = new Map<string, { code: string; expiresAt: number }>();

  async generateAndSendOtp(email: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + AUTH_CONSTANTS.OTP_EXPIRATION_MS;

    this.otpStore.set(email.toLowerCase(), { code, expiresAt });
    console.log(`[OTP SERVICE] Code for ${email} is: ${code} (expires in ${AUTH_CONSTANTS.OTP_EXPIRATION_MINUTES} mins)`);
    return code;
  }

  async verifyOtp(email: string, code: string): Promise<boolean> {
    const record = this.otpStore.get(email.toLowerCase());
    if (!record) {
      return false;
    }

    if (Date.now() > record.expiresAt) {
      this.otpStore.delete(email.toLowerCase());
      return false;
    }

    if (record.code === code) {
      this.otpStore.delete(email.toLowerCase());
      return true;
    }

    return false;
  }
}
