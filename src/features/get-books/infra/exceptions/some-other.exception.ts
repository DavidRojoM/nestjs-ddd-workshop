import { HttpCustomException } from '@workshop/shared/infra/exceptions/http-custom.exception';

type Input = {
  thing: string;
};

export class SomeOtherException extends HttpCustomException {
  constructor(private readonly data: Input) {
    super(`Some other error ${data.thing}`, 500);
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
