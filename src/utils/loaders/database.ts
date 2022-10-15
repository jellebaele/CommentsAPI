import mongoose from 'mongoose';

const setupDatabase = async (): Promise<typeof mongoose> => {
  const dbUrl = process.env.MONGO_CONNECTION_URL || '';

  const connection = mongoose.connect(dbUrl);
  console.log('Connected to DB');

  return connection;
};

export default setupDatabase;
