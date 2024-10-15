import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri: string = process.env.MONGO_URI || '';

export const connectDB = async (): Promise<void> => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI);
    await mongoose.connect(mongoUri);
    console.log('Connection established successfully');
  } catch (err: unknown) {
    console.log('Connection refused', err);
    process.exit(1);
  }
};
