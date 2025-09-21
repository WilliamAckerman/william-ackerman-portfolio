import dotenv from "dotenv";
dotenv.config();

import "dotenv/config";
import express from 'express';
import cors from 'cors';

import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import skillListRouter from "./routes/skillList.js";

import frontendSkillListRouter from "./routes/frontendSkillList.js";
import backendSkillListRouter from "./routes/backendSkillList.js";
import databaseSkillListRouter from "./routes/databaseSkillList.js";

const app = express();
app.use(cors({ origin: "*" })); // Allow all for now
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);

app.use('/api/skillList', skillListRouter);
app.use('/api/frontendSkillList', frontendSkillListRouter);
app.use('/api/backendSkillList', backendSkillListRouter);
app.use('/api/databaseSkillList', databaseSkillListRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});