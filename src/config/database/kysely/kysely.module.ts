import { DynamicModule } from '@nestjs/common';
import { KyselyDatabaseConnection } from './kysely-database.connection';
import { CamelCasePlugin, Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import { DatabaseModule } from '../database.module';

export interface KyselyModuleConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export class KyselyModule {
  static forRoot(config: KyselyModuleConfig): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: KyselyDatabaseConnection,
          useFactory: async () => {
            const db = new Kysely({
              dialect: new MysqlDialect({
                pool: createPool({
                  host: config.host,
                  port: config.port,
                  user: config.user,
                  password: config.password,
                  database: config.database,
                }),
              }),
              plugins: [new CamelCasePlugin()],
            });
            return db;
          },
        },
      ],
      exports: [KyselyDatabaseConnection],
    };
  }
}
