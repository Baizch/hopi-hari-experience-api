import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri: string = process.env.MONGO_URI || '';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connection established successfully');
  } catch (err: unknown) {
    console.log('Connection refused', err);
    process.exit(1);
  }
};
