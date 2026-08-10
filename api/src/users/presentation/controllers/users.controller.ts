import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../auth/infrastructure/jwt/jwt-auth.guard';
import { VerifyIdentityDto } from '../dtos/verify-identity.dto';
import { VerifyIdentityUseCase } from '../../application/use-cases/verify-identity.use-case';
import { UserProfileResponseDto } from '../../../auth/presentation/dtos/auth-response.dto';
import { User } from '@prisma/client';

export interface RequestWithUser extends Request {
  user: User;
}

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly verifyIdentityUseCase: VerifyIdentityUseCase) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get current logged-in user profile details' })
  @ApiResponse({ status: 200, description: 'User profile details returned', type: UserProfileResponseDto })
  getProfile(@Request() req: RequestWithUser): Promise<UserProfileResponseDto> {
    const user = req.user;
    return Promise.resolve({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone ?? '',
      role: user.role,
      sellerType: user.sellerType,
      verificationTier: user.verificationTier,
      ninVerified: user.ninVerified,
      bvnVerified: user.bvnVerified,
    });
  }

  @Post('verify-identity')
  @ApiOperation({ summary: 'Verify user identity (NIN/BVN) via Prembly bridge to unlock VERIFIED seller status' })
  @ApiResponse({ status: 200, description: 'Identity verified. Verification tier upgraded to VERIFIED.' })
  verifyIdentity(
    @Request() req: RequestWithUser,
    @Body() dto: VerifyIdentityDto,
  ): Promise<{ message: string; tier: string }> {
    return this.verifyIdentityUseCase.execute(req.user.id, dto);
  }
}
