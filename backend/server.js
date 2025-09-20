import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import projectRoutes from './routes/projects.js';
import skillRoutes from './routes/skills.js';

dotenv.config();
const app = express();

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));