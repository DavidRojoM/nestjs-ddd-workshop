export interface Environment {
  APP_PORT: number;
  DATABASE: {
    kind: 'typeorm' | 'kysely';
    name: string;
    port: number;
    host: string;
    user: string;
    password: string;
  };
}
