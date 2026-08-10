import { Injectable } from '@nestjs/common';
import { User, UserRole, SellerType, VerificationTier } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserData, IUserRepository } from '../../application/ports/user-repository.port';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: CreateUserData): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        role: data.role ?? UserRole.BOTH,
        sellerType: data.sellerType ?? SellerType.CASUAL,
        verificationTier: data.verificationTier ?? VerificationTier.BASIC,
      },
    });
  }

  async updateVerificationStatus(
    userId: string,
    ninVerified: boolean,
    bvnVerified: boolean,
    tier: VerificationTier,
  ): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        ninVerified,
        bvnVerified,
        verificationTier: tier,
      },
    });
  }
}
