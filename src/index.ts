// src/app.ts
import express from 'express';
import connectDB from './config/database';
import userRoutes from './routes/user.route';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use(express.json());
app.use('/api/v1',userRoutes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
