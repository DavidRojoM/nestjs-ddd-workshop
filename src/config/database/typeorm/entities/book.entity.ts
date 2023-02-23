import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  extId: string;

  @Column()
  price: number;

  // @ManyToOne(() => Category, (category) => category.id)
  // category: Category;
}
