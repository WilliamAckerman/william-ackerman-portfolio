import dotenv from "dotenv";
dotenv.config();

import "dotenv/config";
import express from 'express';
import cors from 'cors';
import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";

const app = express();
app.use(cors({ origin: "*" })); // Allow all for now
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});