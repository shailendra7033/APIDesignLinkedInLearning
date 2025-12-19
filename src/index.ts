// src/app.ts
import express from 'express';
import connectDB from './config/database';
import userRoutes from './routes/user.route';
import app from './app'

const PORT = process.env.PORT || 3000;


const startServer = async () => {
  connectDB();

app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

startServer();

