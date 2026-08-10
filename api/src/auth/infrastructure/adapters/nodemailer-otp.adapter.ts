import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailtrapClient } from 'mailtrap';
import Redis from 'ioredis';
import { IOtpService } from '../../application/ports/otp-service.port';
import { AUTH_CONSTANTS } from '../../../common/constants/auth.constants';

@Injectable()
export class NodemailerOtpAdapter implements IOtpService {
  private readonly logger = new Logger(NodemailerOtpAdapter.name);
  private readonly transporter: nodemailer.Transporter | null = null;
  private readonly mailtrapClient: MailtrapClient | null = null;
  private readonly redisClient: Redis | null = null;
  private readonly memoryStore = new Map<string, { code: string; expiresAt: number }>();

  constructor() {
    // 1. Initialize Mailtrap Official Client if Token Provided
    const mailtrapToken = process.env.MAILTRAP_TOKEN;
    if (mailtrapToken) {
      this.mailtrapClient = new MailtrapClient({ token: mailtrapToken });
      this.logger.log(`[Mailtrap API] Official Mailtrap SDK Client initialized.`);
    }

    // 2. Initialize Nodemailer Transporter Fallback
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 2525;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port,
        auth: { user, pass },
      });
      this.logger.log(`[SMTP Mailtrap] Transporter active for ${host}:${port}`);
    }

    // 3. Initialize Redis Client for Production OTP Storage & TTL Expiry
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
    try {
      this.redisClient = new Redis(redisUrl, {
        maxRetriesPerRequest: 1,
        lazyConnect: false,
        enableOfflineQueue: false,
      });

      this.redisClient.on('connect', () => {
        this.logger.log(`[Redis OTP Storage] Successfully connected to Redis at ${redisUrl}`);
      });

      this.redisClient.on('error', (err) => {
        this.logger.warn(`[Redis OTP Storage] Redis connection warning: ${err.message}. Using in-memory fallback.`);
      });
    } catch (error) {
      this.logger.warn('[Redis OTP Storage] Failed to initialize Redis. Using in-memory fallback.');
    }
  }

  async generateAndSendOtp(email: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const normalizedEmail = email.toLowerCase();
    const redisKey = `otp:${normalizedEmail}`;
    const ttlSeconds = AUTH_CONSTANTS.OTP_EXPIRATION_MINUTES * 60; // 600 seconds (10 mins)

    // Store OTP in Redis with automatic 10-minute TTL expiry
    if (this.redisClient && this.redisClient.status === 'ready') {
      try {
        await this.redisClient.setex(redisKey, ttlSeconds, code);
        this.logger.log(`[Redis OTP Storage] Stored OTP for ${normalizedEmail} (Key: ${redisKey}, TTL: 600s)`);
      } catch (err) {
        this.logger.warn(`[Redis OTP Storage] Failed to set key in Redis. Using in-memory store.`);
        this.memoryStore.set(normalizedEmail, { code, expiresAt: Date.now() + AUTH_CONSTANTS.OTP_EXPIRATION_MS });
      }
    } else {
      this.memoryStore.set(normalizedEmail, { code, expiresAt: Date.now() + AUTH_CONSTANTS.OTP_EXPIRATION_MS });
    }

    // HTML Email Template for Reown Verification
    const subject = 'Your Reown Verification Code';
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; padding: 25px; color: #333; max-width: 500px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #E8472A; margin-top: 0;">Welcome to Reown</h2>
        <p style="font-size: 15px;">Your 6-digit email verification code is:</p>
        <div style="background: #FFF5F3; border: 1px dashed #E8472A; padding: 15px 25px; text-align: center; border-radius: 6px; margin: 20px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #E8472A;">${code}</span>
        </div>
        <p style="font-size: 14px; color: #555;">This code will expire in <strong>${AUTH_CONSTANTS.OTP_EXPIRATION_MINUTES} minutes</strong>.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #888;">If you did not request this verification code, please ignore this email.</p>
      </div>
    `;
    const textBody = `Your Reown 6-digit verification code is: ${code}. Valid for ${AUTH_CONSTANTS.OTP_EXPIRATION_MINUTES} minutes.`;

    // 1. Dispatch via Official Mailtrap SDK Client if available
    if (this.mailtrapClient) {
      try {
        const senderEmail = process.env.MAILTRAP_SENDER_EMAIL || 'hello@demomailtrap.co';
        const senderName = process.env.MAILTRAP_SENDER_NAME || 'Reown Security';

        const res = await this.mailtrapClient.send({
          from: { email: senderEmail, name: senderName },
          to: [{ email: normalizedEmail }],
          subject,
          html: htmlBody,
          text: textBody,
        });
        this.logger.log(`[Mailtrap API] Email successfully sent to ${email} (Response: ${JSON.stringify(res)})`);
        return code;
      } catch (mailtrapErr) {
        this.logger.error(`[Mailtrap API] Failed to send via Mailtrap Client SDK. Trying SMTP fallback...`, mailtrapErr);
      }
    }

    // 2. Dispatch via Nodemailer SMTP Fallback
    if (this.transporter) {
      try {
        const fromAddress = process.env.SMTP_FROM || 'Reown Security <noreply@reown.com>';
        const info = await this.transporter.sendMail({
          from: fromAddress,
          to: email,
          subject,
          html: htmlBody,
          text: textBody,
        });
        this.logger.log(`[SMTP Mailtrap] Email successfully sent to ${email} (MessageId: ${info.messageId})`);
      } catch (error) {
        this.logger.error(`[SMTP Mailtrap] Failed to send email via SMTP to ${email}`, error);
      }
    } else {
      this.logger.log(`====================================================`);
      this.logger.log(`[DEV OTP SINK] Email: ${email} | Code: ${code}`);
      this.logger.log(`====================================================`);
    }

    return code;
  }

  async verifyOtp(email: string, code: string): Promise<boolean> {
    const normalizedEmail = email.toLowerCase();
    const redisKey = `otp:${normalizedEmail}`;

    // Verify via Redis
    if (this.redisClient && this.redisClient.status === 'ready') {
      try {
        const storedCode = await this.redisClient.get(redisKey);
        if (!storedCode) {
          this.logger.warn(`[Redis OTP Storage] OTP lookup failed or expired for ${normalizedEmail}`);
          return false;
        }

        if (storedCode === code) {
          await this.redisClient.del(redisKey); // Atomic one-time use consumption
          this.logger.log(`[Redis OTP Storage] OTP successfully verified and deleted for ${normalizedEmail}`);
          return true;
        }

        return false;
      } catch (err) {
        this.logger.warn(`[Redis OTP Storage] Error verifying OTP via Redis. Fallback to memory.`);
      }
    }

    // In-memory fallback
    const record = this.memoryStore.get(normalizedEmail);
    if (!record) {
      return false;
    }

    if (Date.now() > record.expiresAt) {
      this.memoryStore.delete(normalizedEmail);
      return false;
    }

    if (record.code === code) {
      this.memoryStore.delete(normalizedEmail);
      return true;
    }

    return false;
  }
}
