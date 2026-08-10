import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class FeedService {
  constructor(private readonly prisma: PrismaService) {}

  async getSwipeFeed(): Promise<{ items: unknown[]; message: string }> {
    return { items: [], message: 'Swipe feed stack' };
  }
}
