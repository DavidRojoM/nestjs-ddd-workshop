import { HttpCustomException } from './http-custom.exception';

export class UnknownException extends HttpCustomException {
  constructor(cause: never) {
    super(`Unknown Error`, 500, {
      cause,
    });
  }

  toJson() {
    return {
      statusCode: this.getStatus(),
      message: this.message,
      timestamp: new Date().toISOString(),
    };
  }
}
