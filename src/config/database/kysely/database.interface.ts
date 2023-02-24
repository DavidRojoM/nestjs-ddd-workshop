import { CategoryDb } from './interfaces';
import { BookDb } from './interfaces/book.db-interface';

export interface DbTables {
  book: BookDb;
  category: CategoryDb;
}
