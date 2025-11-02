import express from "express"
import { db } from '../mongodbClient.js';

const app = express()
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const test = await db.collection("test")

        const testQuery = await test.find({}).toArray();

        console.log(testQuery);
        res.send(testQuery).status(200);
    } catch (error) {
        console.error("Error:", error);
    }
})

export { router as mongoFetchTest }