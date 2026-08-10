import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../../prisma/prisma.service';
import { User } from '@prisma/client';
import { AUTH_CONSTANTS } from '../../../common/constants/auth.constants';

export interface JwtPayload {
  sub: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || AUTH_CONSTANTS.JWT_DEFAULT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) {
      throw new UnauthorizedException('User account not found or access token invalid');
    }
    if (user.suspendedUntil && new Date() < user.suspendedUntil) {
      throw new UnauthorizedException('Your account is currently suspended due to policy violations');
    }
    return user;
  }
}
