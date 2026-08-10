export interface IOtpService {
  generateAndSendOtp(email: string): Promise<string>;
  verifyOtp(email: string, code: string): Promise<boolean>;
}

export const I_OTP_SERVICE = Symbol('IOtpService');
