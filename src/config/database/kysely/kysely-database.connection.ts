import { Kysely } from 'kysely';
import { DbTables } from './database.interface';

export class KyselyDatabaseConnection extends Kysely<DbTables> {}
