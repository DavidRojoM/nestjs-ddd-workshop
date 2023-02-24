import { InvariantViolationException } from '@workshop/building-blocks';

type Input = {
  extId: string;
};

export class BookNotFoundDomainException extends InvariantViolationException {
  constructor(public readonly params: Input) {
    super(`Book with extId ${params.extId} not found`);
  }
}
