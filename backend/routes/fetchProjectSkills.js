import express from "express";
import { db } from "../mongodbClient.js";

const app = express()
const router = express.Router()

// Help from https://stackoverflow.com/questions/17039018/how-to-use-a-variable-as-a-field-name-in-mongodb-native-findone

router.get("/:project", async (req, res) => {
    try {
        const project = req.params.project;

        var query = {}
        query[project] = { $gt: 0 };

        var sort = {}
        sort[project] = 1;

        const skills = db.collection("skills")

        const projectSkillsQuery = await skills.find(query).sort(sort).toArray()

        if (projectSkillsQuery.length == 0) {
            //res.send("No project skills were found.").status(404)
            res.send(projectSkillsQuery).status(404)
        } else {
            res.send(projectSkillsQuery).status(200)
        }
    } catch (error) {
        console.error("Error fetching project skills:", error);
        res.send(error).status(500)
    }
})

export { router as fetchProjectSkills }