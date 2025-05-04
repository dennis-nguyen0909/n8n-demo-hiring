import { Injectable } from '@nestjs/common';

interface PaginationOptions {
  page: number;
  limit: number;
}

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getAll(options: PaginationOptions): Promise<PaginatedResponse<any>> {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    // TODO: Replace with your actual data fetching logic
    const data = []; // Your data array
    const total = data.length;
    const totalPages = Math.ceil(total / limit);

    return {
      data: data.slice(skip, skip + limit),
      total,
      page,
      limit,
      totalPages,
    };
  }
}
