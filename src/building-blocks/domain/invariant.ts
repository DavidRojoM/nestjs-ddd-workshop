import { InvariantViolationException } from './exception';

export function invariant(
  message: string,
  condition: unknown,
): asserts condition {
  if (!condition) {
    throw new InvariantViolationException(message);
  }
}
