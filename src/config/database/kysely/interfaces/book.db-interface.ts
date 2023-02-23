import { Generated } from 'kysely';

export interface Book {
  id: Generated<number>;
  name: string;
  extId: string;
  price: number;
  category: number;
}
