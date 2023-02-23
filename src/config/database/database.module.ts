import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleConfig } from './typeorm/typeorm.module';
import { assertUnreachable } from '@workshop/shared/utils/assertions';
import { KyselyModule, KyselyModuleConfig } from './kysely/kysely.module';

@Global()
@Module({})
export class DatabaseModule {
  static register(
    config:
      | ({ kind: 'kysely' } & KyselyModuleConfig)
      | ({ kind: 'typeorm' } & TypeOrmModuleConfig),
  ): DynamicModule {
    const { kind } = config;

    if (kind === 'typeorm') {
      return TypeOrmModule.forRoot(config);
    } else if (kind === 'kysely') {
      return KyselyModule.forRoot(config);
    }

    assertUnreachable(kind);
  }
}
