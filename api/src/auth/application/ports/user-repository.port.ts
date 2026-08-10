import { User, UserRole, SellerType, VerificationTier } from '@prisma/client';

export interface CreateUserData {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  phone: string;
  role?: UserRole;
  sellerType?: SellerType;
  verificationTier?: VerificationTier;
}

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  create(data: CreateUserData): Promise<User>;
  updateVerificationStatus(userId: string, ninVerified: boolean, bvnVerified: boolean, tier: VerificationTier): Promise<User>;
}

export const I_USER_REPOSITORY = Symbol('IUserRepository');
