import { NestFactory } from '@nestjs/core';
import { NestBatchModule } from './nest-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(NestBatchModule);
  await app.listen(3000);
}
bootstrap();
