import express from "express";
import { db } from "../mongodbClient.js";

const app = express()
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const skills = await db.collection("skills")

        const featuredSkillsQuery = await skills.find({featured:"1"}).toArray()

        if (featuredSkillsQuery.length == 0) {
            res.send("No featured skills were found.").status(404)
        } else {
            res.send(featuredSkillsQuery).status(200)
        }
        //res.send(featuredSkillsQuery).status(200)
    } catch (error) {
        console.error("Error fetching featured skills:", error);
        res.send(error).status(500)
    }
})

export { router as fetchFeaturedSkills }