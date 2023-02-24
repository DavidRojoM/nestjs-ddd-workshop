import { Module } from '@nestjs/common';
import { GetBooksModule } from './get-books/get-books.module';
import { GetBookModule } from './get-book/get-book.module';

@Module({
  imports: [GetBooksModule, GetBookModule],
})
export class FeaturesModule {}
