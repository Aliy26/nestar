import { Injectable } from '@nestjs/common';

@Injectable()
export class NestBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
