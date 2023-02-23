import { Category } from '../typeorm/entities/category.entity';
import { Book } from './interfaces/book.db-interface';

export interface DbTables {
  book: Book;
  category: Category;
}
