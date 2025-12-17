// src/config/database.ts
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }
    await mongoose.connect(mongoUri);
    console.log('MongoDB Connected successfully!');
  } catch (err: any) {
  console.error(err.message);
}

};

export default connectDB;
