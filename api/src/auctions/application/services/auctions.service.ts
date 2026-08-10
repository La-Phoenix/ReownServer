import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AuctionsService {
  constructor(private readonly prisma: PrismaService) {}

  async placeBid(auctionId: string): Promise<{ message: string }> {
    return { message: `Bid placed on auction ${auctionId}` };
  }
}
