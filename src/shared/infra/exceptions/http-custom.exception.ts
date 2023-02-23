import { HttpException } from '@nestjs/common';
import { Nullish } from '../../types';

type ToJson = {
  statusCode: number;
  message: string;
  timestamp: string;
  extraData?: Nullish<unknown>;
};

export abstract class HttpCustomException extends HttpException {
  abstract toJson(): ToJson;
}
