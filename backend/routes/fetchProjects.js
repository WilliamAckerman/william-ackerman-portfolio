import express from 'express'
import { db } from '../mongodbClient.js';

const app = express()
const router = express.Router()

router.get('/:featured', async (req, res) => {
    try {
        const featured = req.params.featured;

        if (featured == 1) {
            var query = { "featured": { $gte: 1 }}
        } else {
            var query = { }
        }

        var sort = { "end_date": 1 }

        const projectsCollection = db.collection('projects')
        const projects = await projectsCollection.find(query).sort(sort).toArray()

        if (projects.length === 0) {
            res.send([]).status(404)
        } else {
            res.send(projects).status(200)
        }
    } catch (error) {
        res.status(500).send("Error:", error.message)
    }
})

export { router as fetchProjects }