import { Injectable } from '@nestjs/common';
import { KyselyDatabaseConnection } from '@workshop/config';
import { GetBooksRepository } from '../../domain/repositories/get-books.repository';
import { Book } from '../../domain/value-objects/book.value-object';

@Injectable()
export class KyselyGetBooksRepository implements GetBooksRepository {
  constructor(private readonly dbConn: KyselyDatabaseConnection) {}

  async find(): Promise<Book[]> {
    const books = await this.dbConn
      .selectFrom('book')
      .select(['name', 'extId', 'price'])
      .execute();

    return books.map((book) => Book.fromPrimitives(book));
  }
}
