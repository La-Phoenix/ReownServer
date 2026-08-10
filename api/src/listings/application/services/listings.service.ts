import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ListingsService {
  constructor(private readonly prisma: PrismaService) {}

  async createListing(): Promise<{ message: string }> {
    return { message: 'Listing created' };
  }

  async boostListing(id: string): Promise<{ message: string }> {
    return { message: `Listing ${id} boost initiated` };
  }
}
