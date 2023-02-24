import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

import { tsShouldBeNever } from '@workshop/shared/utils';
import { UnknownException } from '@workshop/shared/infra/exceptions/unknown.exception';
import { HttpCustomException } from '@workshop/shared/infra/exceptions/http-custom.exception';

import { BookNotFoundException } from './exceptions/book-not-found.exception';
import { SomeOtherException } from './exceptions/some-other.exception';
import { BookNotFoundDomainException } from '../domain/exceptions/book-not-found.domain-exception';
import { SomeOtherDomainException } from '../domain/exceptions/some-other.domain-exception';

type AvailableExceptions = InstanceType<
  typeof BookNotFoundDomainException | typeof SomeOtherDomainException
>;

@Catch()
export class GetBooksExceptionFilter implements ExceptionFilter {
  catch(exception: AvailableExceptions, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();

    // We can log exceptions here
    console.error(exception);

    let mappedException: HttpCustomException;
    if (exception instanceof BookNotFoundDomainException) {
      mappedException = new BookNotFoundException({
        bookId: exception.data.bookId,
      });
    } else if (exception instanceof SomeOtherDomainException) {
      mappedException = new SomeOtherException({
        thing: exception.data.thing,
      });
    } else {
      mappedException = new UnknownException(tsShouldBeNever(exception));
    }

    response.status(mappedException.getStatus()).send(mappedException.toJson());
  }
}
