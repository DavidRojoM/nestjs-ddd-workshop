import { Module } from '@nestjs/common';
import { environment } from '@workshop/environment/environment';
import { CqrsWrapperModule, DatabaseModule, entities } from '@workshop/config';
import { assertUnreachable } from '@workshop/shared/utils';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    CqrsWrapperModule,
    DatabaseModule.register(
      environment.DATABASE.kind === 'kysely'
        ? {
            kind: environment.DATABASE.kind,
            host: environment.DATABASE.host,
            password: environment.DATABASE.password,
            port: environment.DATABASE.port,
            user: environment.DATABASE.user,
            database: environment.DATABASE.name,
          }
        : environment.DATABASE.kind === 'typeorm'
        ? {
            kind: environment.DATABASE.kind,
            host: environment.DATABASE.host,
            username: environment.DATABASE.user,
            password: environment.DATABASE.password,
            port: environment.DATABASE.port,
            database: environment.DATABASE.name,
            entities,
            logging: false,
            synchronize: false,
          }
        : assertUnreachable(environment.DATABASE.kind),
    ),
    FeaturesModule,
  ],
})
export class AppModule {}
