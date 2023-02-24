import { Injectable } from '@nestjs/common';
import { GetBookRepository } from '../../domain/repositories/get-book.repository';
import { Book } from '../../domain/value-objects/book.value-object';

@Injectable()
export class TypeOrmGetBookRepository extends GetBookRepository {
  find(extId: string): Promise<Book> {
    throw new Error('Method not implemented.');
  }
}
