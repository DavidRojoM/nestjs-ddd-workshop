import { Module } from '@nestjs/common';
import { GetBooksModule } from './get-books/get-books.module';

@Module({
  imports: [GetBooksModule],
})
export class FeaturesModule {}
