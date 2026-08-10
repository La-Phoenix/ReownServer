import { Controller, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { OrdersService } from '../../application/services/orders.service';

@ApiTags('Orders / Escrow')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('checkout')
  @ApiOperation({ summary: 'Initialize Paystack escrow payment checkout for an order' })
  @ApiResponse({ status: 201, description: 'Paystack payment transaction initialized' })
  checkout(): Promise<{ message: string }> {
    return this.ordersService.checkout();
  }

  @Post(':id/release')
  @ApiOperation({ summary: 'Release escrow funds using 4-digit handoff code' })
  @ApiParam({ name: 'id', description: 'Order UUID' })
  @ApiBody({ schema: { type: 'object', properties: { handoffCode: { type: 'string', example: '4821' } } } })
  @ApiResponse({ status: 200, description: 'Escrow funds released to seller bank account' })
  release(
    @Param('id') id: string,
    @Body('handoffCode') handoffCode: string,
  ): Promise<{ message: string }> {
    return this.ordersService.release(id, handoffCode);
  }

  @Post(':id/dispute')
  @ApiOperation({ summary: 'Raise an escrow dispute within 48 hours' })
  @ApiParam({ name: 'id', description: 'Order UUID' })
  @ApiResponse({ status: 200, description: 'Escrow funds frozen and dispute logged for ops review' })
  dispute(@Param('id') id: string): Promise<{ message: string }> {
    return this.ordersService.dispute(id);
  }
}
