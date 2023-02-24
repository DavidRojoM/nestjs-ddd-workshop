import { Book } from '../value-objects/book.value-object';

export abstract class GetBooksRepository {
  abstract find(): Promise<Book[]>;
}
