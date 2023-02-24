import { HttpCustomException } from '@workshop/shared/infra/exceptions/http-custom.exception';

type Input = {
  bookId: string;
};

export class BookNotFoundException extends HttpCustomException {
  constructor(private readonly data: Input) {
    super(`Could not find book with id ${data.bookId}`, 404);
  }

  toJson() {
    return {
      statusCode: this.getStatus(),
      message: this.message,
      timestamp: new Date().toISOString(),
      extraData: this.data,
    };
  }
}
