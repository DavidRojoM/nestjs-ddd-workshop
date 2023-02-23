import { Environment } from './environment.type';

import { config } from 'dotenv';

config();

export const environment: Environment = {
  APP_PORT: 3000,
  DATABASE: {
    kind: 'typeorm',
    name: 'bookshop',
    host: 'localhost',
    port: 3306,
    password: 'toor',
    user: 'root',
  },
};
