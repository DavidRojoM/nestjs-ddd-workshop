import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { GetBooksQuery } from '../../domain/queries/get-books.query';
import { GetBooksRepository } from '../../domain/repositories/get-books.repository';

type Output = {
  name: string;
  extId: string;
  price: number;
};

@QueryHandler(GetBooksQuery)
export class GetBooksQueryHandler implements IQueryHandler<never, Output[]> {
  constructor(private readonly repository: GetBooksRepository) {}
  async execute(): Promise<Output[]> {
    const books = await this.repository.find();
    return books.map((book) => {
      const primitives = book.toPrimitives();

      return {
        name: primitives.name,
        extId: primitives.extId,
        price: primitives.price,
      };
    });
  }
}
