import { Controller, Get, Query } from '@nestjs/common';
import { GetBookDto } from './dto/get-book.dto';
import { GetBookUseCase } from '../application/use-cases/get-book.use-case';

interface Book {
  name: string;
  extId: string;
  price: number;
}

type GetBooksResponse = Book;

// TODO
@Controller('get-book')
export class GetBookController {
  constructor(private readonly useCase: GetBookUseCase) {}
  @Get()
  async findByExtId(@Query() query: GetBookDto): Promise<GetBooksResponse> {
    const book = await this.useCase.handle({
      extId: query.extId,
    });

    return {
      name: book.name,
      extId: book.extId,
      price: book.price,
    };
  }
}
