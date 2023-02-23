import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CommandBus as NestCommandBus,
  QueryBus as NestQueryBus,
} from '@nestjs/cqrs';
import { CommandBus, QueryBus } from '@workshop/building-blocks';

@Global()
@Module({
  imports: [CqrsModule],
  providers: [
    {
      provide: CommandBus,
      useExisting: NestCommandBus,
    },
    {
      provide: QueryBus,
      useExisting: NestQueryBus,
    },
  ],
  exports: [CommandBus, QueryBus],
})
export class CqrsWrapperModule {}
