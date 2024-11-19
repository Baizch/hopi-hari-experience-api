import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import attractionsRoutes from './routes/attractions';

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

app.use('/api', attractionsRoutes);

const PORT = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
