import { Generated } from 'kysely';

export interface Book {
  id: Generated<number>;
  name: string;
  createdAt: Date;
  description?: string;
}
