import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { fetchSkills } from './routes/fetchSkills.js';
import { fetchFeaturedSkills } from './routes/fetchFeaturedSkills.js';

import { fetchProjects } from './routes/fetchProjects.js';
import { fetchFeaturedProjects } from './routes/fetchFeaturedProjects.js';

import { sendContactMessage } from './routes/sendContactMessage.js';

dotenv.config()
const app = express()
const port = process.env.PORT

const apiRoute = process.env.API_ROUTE;
app.use(cors())
//app.options('*', cors())

// MongoDB routes
app.use(`${apiRoute}/skills`, fetchSkills) // Exclude :param when calling route here
app.use(`${apiRoute}/featuredskills`, fetchFeaturedSkills)

app.use(`${apiRoute}/projects`, fetchProjects)
app.use(`${apiRoute}/featuredprojects`, fetchFeaturedProjects)

app.use(`${apiRoute}/send-contact-message`, sendContactMessage)

app.get('/', async (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})