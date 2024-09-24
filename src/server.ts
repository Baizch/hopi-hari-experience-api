import express from 'express';
import { Router } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

// Server configuration
dotenv.config();
connectDB();
const app = express();
const router = Router();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Routes
router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Default route' });
});

router.get('/attractions', async (req, res) => {
  res.status(200).json({ message: 'Teste' });
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
