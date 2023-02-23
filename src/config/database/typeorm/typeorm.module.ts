import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DatabaseModule } from '../database.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export interface TypeOrmModuleConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: EntityClassOrSchema[];
  synchronize: true;
  logging: false;
}

export class TypeOrmModule {
  static forRoot(config: TypeOrmModuleConfig): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        NestTypeOrmModule.forRoot({
          type: 'mysql',
          ...config,
          namingStrategy: new SnakeNamingStrategy(),
        }),
        NestTypeOrmModule.forFeature(config.entities),
      ],
    };
  }
}
