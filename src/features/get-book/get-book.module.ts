import { Module } from '@nestjs/common';
import { environment } from '@workshop/environment/environment';
import { TypeOrmGetBookRepository } from './infra/repositories/typeorm-get-book.repository';
import { KyselyGetBookRepository } from './infra/repositories/kysely-get-book.repository';
import { GetBookController } from './infra/get-book.controller';
import { GetBookUseCase } from './application/use-cases/get-book.use-case';
import { GetBookRepository } from './domain/repositories/get-book.repository';

@Module({
  controllers: [GetBookController],
  providers: [
    GetBookUseCase,
    {
      provide: GetBookRepository,
      useClass:
        environment.DATABASE.kind === 'typeorm'
          ? TypeOrmGetBookRepository
          : KyselyGetBookRepository,
    },
  ],
})
export class GetBookModule {}
