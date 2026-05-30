import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Health check — ทดสอบว่า server ทำงาน
app.get('/', (req, res) => {
  res.json({ status: 'Woodball API running' });
});

// Routes จะเพิ่มทีละ Module
// app.use('/api/teams', teamsRouter);
// app.use('/api/matches', matchesRouter);
// app.use('/api/scores', scoresRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
