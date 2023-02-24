import { Book } from '../value-objects/book.value-object';

export abstract class GetBookRepository {
  abstract find(extId: string): Promise<Book>;
}
