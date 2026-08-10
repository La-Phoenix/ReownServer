import { Controller, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from '../../application/services/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('profile')
  @ApiOperation({ summary: 'Update user profile details' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  updateProfile(): Promise<{ message: string }> {
    return this.usersService.updateProfile();
  }

  @Post('verify-identity')
  @ApiOperation({ summary: 'Verify user identity via NIN/BVN Prembly bridge' })
  @ApiResponse({ status: 200, description: 'Identity verification request processed' })
  verifyIdentity(): Promise<{ message: string }> {
    return this.usersService.verifyIdentity();
  }
}
