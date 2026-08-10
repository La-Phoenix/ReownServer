import { Module } from '@nestjs/common';
import { UsersController } from './presentation/controllers/users.controller';
import { VerifyIdentityUseCase } from './application/use-cases/verify-identity.use-case';
import { I_KYC_PROVIDER } from './application/ports/kyc-provider.port';
import { PremblyKycAdapter } from './infrastructure/adapters/prembly-kyc.adapter';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [
    VerifyIdentityUseCase,
    {
      provide: I_KYC_PROVIDER,
      useClass: PremblyKycAdapter,
    },
  ],
  exports: [VerifyIdentityUseCase],
})
export class UsersModule {}
