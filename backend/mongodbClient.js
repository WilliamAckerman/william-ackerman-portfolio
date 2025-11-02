import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGODB_CONNECTION_STRING
const mongodbClient = new MongoClient(uri)
let conn;
try {
    conn = await mongodbClient.connect()
    console.log("Successfully connected to MongoDB database")
} catch (error) {
    console.error("Error connecting to MongoDB database:", error);
}
const db = conn.db("portfolio");

export { db }