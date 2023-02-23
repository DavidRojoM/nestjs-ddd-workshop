import { invariant } from './invariant';

export abstract class ValueObject<Props> {
  protected declare readonly props: Props;

  constructor(props: Props) {
    invariant(
      'props of a value object must be an object',
      props != null && typeof props === 'object' && !Array.isArray(props),
    );

    Object.defineProperty(this, 'props', {
      value: Object.freeze({ ...props }),
      enumerable: false,
      writable: false,
      configurable: false,
    });

    Object.freeze(this);
  }
}
