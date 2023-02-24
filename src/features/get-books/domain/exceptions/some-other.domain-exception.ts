import { InvariantViolationException } from 'src/building-blocks/domain/exception';

type Primitives = {
  thing: string;
};
export class SomeOtherDomainException extends InvariantViolationException {
  constructor(public readonly data: Primitives) {
    super(`Error: ${data.thing}`);
  }
}
