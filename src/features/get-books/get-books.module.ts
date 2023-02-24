import { Module } from '@nestjs/common';
import { GetBooksController } from './infra/get-books.controller';
import { GetBooksRepository } from './domain/repositories/get-books.repository';
import { environment } from '@workshop/environment/environment';
import { KyselyGetBooksRepository } from './infra/repositories/kysely-get-books.repository';
import { TypeOrmGetBooksRepository } from './infra/repositories/typeorm-get-books.repository';
import { GetBooksUseCase } from './application/use-cases/get-books.use-case';
import { GetBooksQueryHandler } from './infra/query-handlers.ts/get-books.query-handler';

@Module({
  controllers: [GetBooksController],
  providers: [
    GetBooksUseCase,
    {
      provide: GetBooksRepository,
      useClass:
        environment.DATABASE.kind === 'kysely'
          ? KyselyGetBooksRepository
          : TypeOrmGetBooksRepository,
    },
    GetBooksQueryHandler,
  ],
})
export class GetBooksModule {}
