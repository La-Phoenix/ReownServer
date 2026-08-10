import { Module } from '@nestjs/common';
import { FeedService } from './application/services/feed.service';
import { FeedController } from './presentation/controllers/feed.controller';

@Module({
  controllers: [FeedController],
  providers: [FeedService],
  exports: [FeedService],
})
export class FeedModule {}
