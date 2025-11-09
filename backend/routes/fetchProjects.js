import express from 'express'
import { db } from '../mongodbClient.js';

const app = express()
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const projectsCollection = db.collection('projects')
        const projects = await projectsCollection.find({}).toArray()

        if (projects.length === 0) {
            res.status(200).send([])
        } else {
            res.status(200).send(projects)
        }
    } catch (error) {
        res.status(500).send("Error:", error.message)
    }
})

export { router as fetchProjects }