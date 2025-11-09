import express from 'express'
import { db } from '../mongodbClient.js'

const app = express()
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const projects = db.collection("projects");

        const featuredProjectsQuery = await projects.find({featured:"1"}).toArray()

        if (featuredProjectsQuery.length == 0) {
            res.send("No featured projects were found.").status(404)
        } else {
            res.send(featuredProjectsQuery).status(200)
        }
    } catch (error) {
        res.send("Failed to fetch featured projects:", error)
        res.send(error).status(500)
    }
})

export { router as fetchFeaturedProjects }