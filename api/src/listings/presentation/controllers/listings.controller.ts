import { Controller, Post, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ListingsService } from '../../application/services/listings.service';

@ApiTags('Listings')
@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item listing' })
  @ApiResponse({ status: 201, description: 'Listing created successfully' })
  createListing(): Promise<{ message: string }> {
    return this.listingsService.createListing();
  }

  @Post(':id/boost')
  @ApiOperation({ summary: 'Initiate a paid boost for a listing' })
  @ApiParam({ name: 'id', description: 'Listing UUID' })
  @ApiResponse({ status: 200, description: 'Boost payment initialized' })
  boostListing(@Param('id') id: string): Promise<{ message: string }> {
    return this.listingsService.boostListing(id);
  }
}
