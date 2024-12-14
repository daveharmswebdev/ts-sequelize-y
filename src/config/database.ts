import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import { Actor } from '../models/actor';

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'pagila',
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  ssl: false,
  clientMinMessages: 'notice',
  models: [Actor],
});

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully');
  } catch (error) {
    console.error('Unable to connect to the db', error);
  }
};

export default sequelize;
