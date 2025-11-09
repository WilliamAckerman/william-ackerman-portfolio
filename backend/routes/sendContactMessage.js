import express from "express"
import nodemailer from "nodemailer"
import { db } from '../mongodbClient.js';

const app = express()
const router = express.Router()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.NODEMAILER_EMAIL_ADDRESS,
    }
})

router.post("/:name/:email/:subject/:message", async (req, res) => {
    try {
        const { name, email, subject, message } = req.params;


    } catch (error) {
        res.status(500).send("An error occurred: " + error.message)
    }
})