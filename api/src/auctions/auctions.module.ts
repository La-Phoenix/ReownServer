import { Module } from '@nestjs/common';
import { AuctionsService } from './application/services/auctions.service';
import { AuctionsController } from './presentation/controllers/auctions.controller';

@Module({
  controllers: [AuctionsController],
  providers: [AuctionsService],
  exports: [AuctionsService],
})
export class AuctionsModule {}
