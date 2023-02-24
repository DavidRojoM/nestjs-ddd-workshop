import { Injectable } from '@nestjs/common';
import { QueryBus, UseCase } from '@workshop/building-blocks';
import { GetBooksQuery } from '../../domain/queries/get-books.query';

type Output = {
  name: string;
  extId: string;
  price: number;
}[];

@Injectable()
export class GetBooksUseCase extends UseCase<never, Output> {
  constructor(private readonly queryBus: QueryBus) {
    super();
  }

  // Something weird here?
  async handle(): Promise<Output> {
    return this.queryBus.execute<Output>(new GetBooksQuery());
  }
}
