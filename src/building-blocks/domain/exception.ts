import { Nullish } from '@workshop/shared/types';

export class Exception extends Error {
  constructor(message: string, options?: Nullish<ErrorOptions>) {
    super(message, options);
    this.name = `Domain Exception`;
  }
}

export class InvariantViolationException extends Exception {}
