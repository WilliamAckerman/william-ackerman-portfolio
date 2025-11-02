import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
//import { MongoClient } from 'mongodb'
import { supabase } from './supabaseClient.js'
import { fetchTest } from './routes/fetchTest.js';
import { mongoFetchTest } from './routes/mongoFetchTest.js';
//import { db } from './mongodbClient.js';

dotenv.config()
const app = express()
const port = process.env.PORT
//const mongodbClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING)
//await mongodbClient.connect();

const apiRoute = process.env.API_ROUTE;
app.use(cors())
//app.options('*', cors())

// Supabase routes
app.use(`${apiRoute}/test`, fetchTest)

// MongoDB routes
app.use(`${apiRoute}/mongotest`, mongoFetchTest)

app.get('/', async (req, res, next) => {
    res.send('Hello World!')
    next()
})

/*async function run() {
    try {
        await mongodbClient.connect();

        await mongodbClient.db("test").command({ ping: 1 })
        console.log("Successfully connected to MongoDB database.");
    } catch (error) {
        console.log("Error connecting to MongoDB database:", error);
    }
}*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    //run()
})