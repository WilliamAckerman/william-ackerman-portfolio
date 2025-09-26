import dotenv from "dotenv";
dotenv.config();

import "dotenv/config";
import express from 'express';
import cors from 'cors';

import projectsRouter from "./routes/projects.js";
import skillsRouter from "./routes/skills.js";
import skillListRouter from "./routes/skillList.js";

import featuredProjectsRouter from "./routes/featuredProjects.js";
import featuredSkillsRouter from "./routes/homePageSkills.js";

import frontendSkillListRouter from "./routes/frontendSkillList.js";
import backendSkillListRouter from "./routes/backendSkillList.js";
import databaseSkillListRouter from "./routes/databaseSkillList.js";
import programmingLanguageSkillListRouter from "./routes/programmingLanguageSkillList.js";
import toolSkillListRouter from "./routes/toolSkillList.js";
import operatingSystemSkillListRouter from "./routes/operatingSystemSkillList.js";
import IDESkillListRouter from "./routes/IDESkillList.js";
import miscTechnologySkillListRouter from "./routes/miscTechnologySkillList.js";
import otherTechnicalSkillListRouter from "./routes/otherTechnicalSkillList.js";
import softSkillListRouter from "./routes/softSkillList.js";

const app = express();
app.use(cors({ origin: "*" })); // Allow all for now
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);

app.use('/api/featuredProjects', featuredProjectsRouter);
app.use('/api/featuredSkills', featuredSkillsRouter);

app.use('/api/skillList', skillListRouter);
app.use('/api/frontendSkillList', frontendSkillListRouter);
app.use('/api/backendSkillList', backendSkillListRouter);
app.use('/api/databaseSkillList', databaseSkillListRouter);
app.use('/api/programmingLanguageSkillList', programmingLanguageSkillListRouter);
app.use('/api/toolSkillList', toolSkillListRouter);
app.use('/api/operatingSystemSkillList', operatingSystemSkillListRouter);
app.use('/api/IDESkillList', IDESkillListRouter);
app.use('/api/miscTechnologySkillList', miscTechnologySkillListRouter);
app.use('/api/otherTechnicalSkillList', otherTechnicalSkillListRouter);
app.use('/api/softSkillList', softSkillListRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});