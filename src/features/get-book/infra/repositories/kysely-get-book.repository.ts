import { Injectable } from '@nestjs/common';
import { GetBookRepository } from '../../domain/repositories/get-book.repository';
import { Book } from '../../domain/value-objects/book.value-object';
import { KyselyDatabaseConnection } from '@workshop/config';
import { BookNotFoundDomainException } from '../../domain/exceptions/book-not-found.domain-exception';

@Injectable()
export class KyselyGetBookRepository extends GetBookRepository {
  constructor(private readonly dbConn: KyselyDatabaseConnection) {
    super();
  }
  async find(extId): Promise<Book> {
    const book = await this.dbConn
      .selectFrom('book')
      .selectAll('book')
      .where('extId', '=', extId)
      .executeTakeFirst();

    if (!book) {
      throw new BookNotFoundDomainException(extId);
    }

    return Book.fromPrimitives({
      name: book.name,
      extId: book.extId,
      price: book.price,
    });
  }
}
