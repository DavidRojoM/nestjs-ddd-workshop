import { Injectable } from '@nestjs/common';
import { UseCase } from '@workshop/building-blocks';
import { GetBookRepository } from '../../domain/repositories/get-book.repository';

type Input = {
  extId: string;
};

type Output = {
  name: string;
  extId: string;
  price: number;
};

@Injectable()
export class GetBookUseCase extends UseCase<Input, Output> {
  constructor(private readonly repository: GetBookRepository) {
    super();
  }

  async handle(input: Input): Promise<Output> {
    const book = await this.repository.find(input.extId);

    const primitives = book.toPrimitives();

    return {
      name: primitives.name,
      extId: primitives.extId,
      price: primitives.price,
    };
  }
}
