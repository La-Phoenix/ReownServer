import { Controller, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AuctionsService } from '../../application/services/auctions.service';

@ApiTags('Auctions')
@Controller('auctions')
export class AuctionsController {
  constructor(private readonly auctionsService: AuctionsService) {}

  @Post(':id/bid')
  @ApiOperation({ summary: 'Place a bid on an active auction' })
  @ApiParam({ name: 'id', description: 'Auction UUID' })
  @ApiResponse({ status: 200, description: 'Bid successfully submitted' })
  placeBid(@Param('id') id: string): Promise<{ message: string }> {
    return this.auctionsService.placeBid(id);
  }
}
