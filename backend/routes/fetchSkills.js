import express from "express"
import { db } from "../mongodbClient.js";

const app = express()
const router = express.Router()

router.get("/:type", async (req, res) => { // Include route parameters in route files
    try {
        const { type } = req.params;

        const skills = db.collection('skills')

        const skillsQuery = (type == "featured") ? 
            await skills.find({featured:"1"}).toArray() 
            : 
            await skills.find({"type":type}).sort({place:1}).toArray()

        /*if (type == "featured") {
            skillsQuery = await skills.find({featured:"1"}).toArray()
        }
        else {
            skillsQuery = await skills.find({ "type": type }).sort({place:1}).toArray()
        }*/

        if (skillsQuery.length === 0) {
            res.status(404).send([])
        } else {
            res.status(200).send(skillsQuery)
        }
    } catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
})

export { router as fetchSkills }