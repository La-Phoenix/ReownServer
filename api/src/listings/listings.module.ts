import { Module } from '@nestjs/common';
import { ListingsService } from './application/services/listings.service';
import { ListingsController } from './presentation/controllers/listings.controller';

@Module({
  controllers: [ListingsController],
  providers: [ListingsService],
  exports: [ListingsService],
})
export class ListingsModule {}
