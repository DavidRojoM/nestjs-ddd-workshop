import { ValueObject, invariant } from '@workshop/building-blocks';

interface IntegerProps {
  value: number;
}

const RoundingStrategies = {
  ceil: (value: number) => Math.ceil(value),
  round: (value: number) => Math.round(value),
  floor: (value: number) => Math.floor(value),
};

type OperableWith = number | IntegerNumber;

/**
 * Represents the set of integers
 */
export class IntegerNumber extends ValueObject<IntegerProps> {
  static fromPrimitives(value: number) {
    return new IntegerNumber({ value });
  }

  constructor({ value }: IntegerProps) {
    invariant(`value must be a number`, typeof value === 'number');
    invariant(`value must be a safe integer`, Number.isSafeInteger(value));

    super({ value });
  }

  sum(value: OperableWith): IntegerNumber {
    return new IntegerNumber({
      value: this.props.value + this.getValueFrom(value),
    });
  }

  minus(value: OperableWith): IntegerNumber {
    return new IntegerNumber({
      value: this.props.value - this.getValueFrom(value),
    });
  }

  multiplyBy(by: OperableWith): IntegerNumber {
    return new IntegerNumber({
      value: this.props.value * this.getValueFrom(by),
    });
  }

  divideBy(
    by: OperableWith,
    roundBy: keyof typeof RoundingStrategies,
  ): IntegerNumber {
    return new IntegerNumber({
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
      typeof value === 'number' ? new IntegerNumber({ value }) : value
    ).toPrimitives();
  }
}
