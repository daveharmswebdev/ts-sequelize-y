import sequelize from './database';

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database successfully connected.');
  } catch (error) {
    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
