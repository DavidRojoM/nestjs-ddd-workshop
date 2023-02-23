import { Category } from './interfaces';
import { Book } from './interfaces/book.db-interface';

export interface DbTables {
  book: Book;
  category: Category;
}
