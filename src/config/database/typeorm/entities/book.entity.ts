import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  extId: string;

  @Column()
  price: number;

  @ManyToOne(() => CategoryEntity, (category) => category.book)
  category: CategoryEntity;
}
