import { Controller, Get, UseFilters } from '@nestjs/common';
import { GetBooksExceptionFilter } from './get-books.exception-filter';
import { GetBooksUseCase } from '../application/use-cases/get-books.use-case';

interface Book {
  name: string;
  extId: string;
  price: number;
}

type GetBooksResponse = Book[];

@Controller('get-books')
@UseFilters(GetBooksExceptionFilter)
export class GetBooksController {
  constructor(private readonly useCase: GetBooksUseCase) {}

  @Get()
  async getBooks(): Promise<GetBooksResponse> {
    return await this.useCase.handle();
  }
}
