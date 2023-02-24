import { Controller, Get, Query } from '@nestjs/common';
import { GetBookDto } from './dto/get-book.dto';

interface Book {
  name: string;
  extId: string;
  price: number;
}

type GetBooksResponse = Book;

// TODO
@Controller('get-book')
export class GetBookController {
  @Get()
  async findByExtId(@Query() query: GetBookDto): Promise<GetBooksResponse> {
    return;
  }
}
