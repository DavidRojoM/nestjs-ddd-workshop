import { Injectable } from '@nestjs/common';
import { UseCase } from '@workshop/building-blocks';

import { GetBooksRepository } from '../../domain/repositories/get-books.repository';

type Output = {
  name: string;
  extId: string;
  price: number;
}[];

@Injectable()
export class GetBooksUseCase extends UseCase<never, Output> {
  constructor(private readonly repository: GetBooksRepository) {
    super();
  }

  async handle(): Promise<Output> {
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
