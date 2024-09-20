import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI || '';

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connection established successfully');
  } catch (err) {
    console.log('Connection refused', err);
    process.exit(1);
  }
};
