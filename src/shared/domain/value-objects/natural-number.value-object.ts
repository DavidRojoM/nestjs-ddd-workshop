import { ValueObject, invariant } from '@workshop/building-blocks';

interface NaturalNumberProps {
  value: number;
}

const RoundingStrategies = {
  ceil: (value: number) => Math.ceil(value),
  round: (value: number) => Math.round(value),
  floor: (value: number) => Math.floor(value),
};

type OperableWith = number | NaturalNumber;

/**
 * Represents the set of natural numbers defined by N: {0, 1, 2, 3, ...}, 0 inclusive.
 */
export class NaturalNumber extends ValueObject<NaturalNumberProps> {
  static fromPrimitives(value: number) {
    return new NaturalNumber({ value });
  }

  constructor({ value }: NaturalNumberProps) {
    invariant(`value must be a number`, typeof value === 'number');
    invariant(`value must be greather or equal to 0`, value >= 0);
    invariant(`value must be a safe integer`, Number.isSafeInteger(value));

    super({ value });
  }

  sum(value: OperableWith): NaturalNumber {
    return new NaturalNumber({
      value: this.props.value + this.getValueFrom(value),
    });
  }

  minus(value: OperableWith): NaturalNumber {
    return new NaturalNumber({
      value: this.props.value - this.getValueFrom(value),
    });
  }

  multiplyBy(by: OperableWith): NaturalNumber {
    return new NaturalNumber({
      value: this.props.value * this.getValueFrom(by),
    });
  }

  divideBy(
    by: OperableWith,
    roundBy: keyof typeof RoundingStrategies,
  ): NaturalNumber {
    return new NaturalNumber({
      value: RoundingStrategies[roundBy](
        this.props.value / this.getValueFrom(by),
      ),
    });
  }

  isZero(): boolean {
    return this.props.value === 0;
  }

  isEqualTo(other: OperableWith): boolean {
    return this.props.value === this.getValueFrom(other);
  }

  isLesserThan(other: OperableWith): boolean {
    return this.props.value < this.getValueFrom(other);
  }

  isLesserOrEqualThan(other: OperableWith): boolean {
    return this.isLesserThan(other) || this.isEqualTo(other);
  }

  isGreaterThan(other: OperableWith): boolean {
    return this.props.value > this.getValueFrom(other);
  }

  isGreaterOrEqualThan(other: OperableWith): boolean {
    return this.isGreaterThan(other) || this.isEqualTo(other);
  }

  toPrimitives(): number {
    return this.props.value;
  }

  private getValueFrom(value: OperableWith): number {
    return (
      typeof value === 'number' ? new NaturalNumber({ value }) : value
    ).toPrimitives();
  }
}
