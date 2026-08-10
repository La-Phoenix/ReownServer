export interface KycVerificationResult {
  verified: boolean;
  idType: 'NIN' | 'BVN';
  idNumber: string;
  firstName?: string;
  lastName?: string;
  message: string;
}

export interface IKycProvider {
  verifyNin(ninNumber: string): Promise<KycVerificationResult>;
  verifyBvn(bvnNumber: string): Promise<KycVerificationResult>;
}

export const I_KYC_PROVIDER = Symbol('IKycProvider');
