/// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import sweetsRoutes from './routes/sweets.js';

dotenv.config();
const app = express();

// parse JSON body
app.use(express.json());

// --- CORS: allow all origins during local development ---
app.use(cors()); // <-- simple and effective for dev

// (If you prefer to restrict to your frontend origin, use the commented block instead)
// app.use(cors({
//   origin: 'http://localhost:3003',
//   methods: ['GET','POST','PUT','DELETE','OPTIONS'],
//   credentials: true
// }));

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
connect();

// Routes (after CORS middleware)
app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
