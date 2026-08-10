import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FeedService } from '../../application/services/feed.service';

@ApiTags('Feed')
@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('swipe')
  @ApiOperation({ summary: 'Get Tinder-style swipe listing feed stack' })
  @ApiResponse({ status: 200, description: 'Paginated 10-card listing stack' })
  getSwipeFeed(): Promise<{ items: unknown[]; message: string }> {
    return this.feedService.getSwipeFeed();
  }
}
