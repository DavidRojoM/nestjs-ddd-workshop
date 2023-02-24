import { Generated } from 'kysely';

export interface BookDb {
  id: Generated<number>;
  name: string;
  extId: string;
  price: number;
  categoryId: number;
}
