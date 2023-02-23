import { ValueObject, invariant } from '@workshop/building-blocks';

interface NonEmptyStringProps<Value extends string = string> {
  value: Value;
}

export class NonEmptyString<Value extends string = string> extends ValueObject<
  NonEmptyStringProps<Value>
> {
  constructor({ value }: NonEmptyStringProps<Value>) {
    invariant(
      `Value cannot be an empty string`,
      typeof value === 'string' && value.length > 0,
    );

    super({ value });
  }

  isEqualTo(other: NonEmptyString | string): boolean {
    return this.props.value === this.getValueFrom(other);
  }

  toPrimitives() {
    return this.props.value;
  }

  private getValueFrom(value: string | NonEmptyString): string {
    return (
      typeof value === 'string' ? new NonEmptyString({ value }) : value
    ).toPrimitives();
  }
}
