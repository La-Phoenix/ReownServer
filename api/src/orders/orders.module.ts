import { Module } from '@nestjs/common';
import { OrdersService } from './application/services/orders.service';
import { OrdersController } from './presentation/controllers/orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
