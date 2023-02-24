import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { GetBooksRepository } from '../../domain/repositories/get-books.repository';
import { Book } from '../../domain/value-objects/book.value-object';
import { BookEntity } from '@workshop/config';

@Injectable()
export class TypeOrmGetBooksRepository implements GetBooksRepository {
  constructor(private readonly dataSource: DataSource) {}

  async find(): Promise<Book[]> {
    const result = await this.dataSource.getRepository(BookEntity).find();

    return result.map((book) => Book.fromPrimitives(book));
  }
}
