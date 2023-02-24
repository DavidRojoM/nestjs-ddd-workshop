import { InvariantViolationException } from 'src/building-blocks/domain/exception';

type Primitives = {
  bookId: string;
};
export class BookNotFoundDomainException extends InvariantViolationException {
  constructor(public readonly data: Primitives) {
    super(`Could not find book with id ${data.bookId}`);
  }
}
