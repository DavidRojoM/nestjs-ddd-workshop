import { ValueObject, invariant } from '@workshop/building-blocks';
import { NaturalNumber } from '@workshop/shared/domain/value-objects/natural-number.value-object';
import { NonEmptyString } from '@workshop/shared/domain/value-objects/non-empty-string.value-object';

type Props = {
  name: NonEmptyString;
  extId: NonEmptyString;
  price: NaturalNumber;
};

type FromPrimitives = {
  name: string;
  extId: string;
  price: number;
};

type ToPrimitives = FromPrimitives;

export class Book extends ValueObject<Props> {
  constructor(props: Props) {
    invariant(
      'name must be a NonEmptyString',
      props.name instanceof NonEmptyString,
    );
    invariant(
      'extId must be a NonEmptyString',
      props.extId instanceof NonEmptyString,
    );
    invariant(
      'price must be a NaturalNumber',
      props.price instanceof NaturalNumber,
    );

    super(props);
  }

  static fromPrimitives(primitives: FromPrimitives): Book {
    return new Book({
      name: new NonEmptyString({
        value: primitives.name,
      }),
      extId: new NonEmptyString({
        value: primitives.extId,
      }),
      price: new NaturalNumber({
        value: primitives.price,
      }),
    });
  }

  toPrimitives(): ToPrimitives {
    return {
      name: this.props.name.toPrimitives(),
      extId: this.props.extId.toPrimitives(),
      price: this.props.price.toPrimitives(),
    };
  }
}
