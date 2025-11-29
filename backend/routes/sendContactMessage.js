import express from "express"
import nodemailer from "nodemailer"
import bodyParser from "body-parser"
import { verifySolution } from 'altcha-lib';

const app = express()
const router = express.Router()

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL_ADDRESS,
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
});

router.post("/", jsonParser, async (req, res) => {
    try {
        //const { name, email, subject, message } = req.params;

        if (!req.body || !req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
            res.status(404).send("Invalid request body")
        }

        if (!req.body.altcha) {
            res.status(404).send("No altcha provided.")
        }

        //console.log("Altcha")
        //console.log(req.body.altcha)
        //console.log(process.env.HMAC_KEY)

        const ok = await verifySolution(
            req.body.altcha,
            process.env.HMAC_KEY,
        )
        //console.log("OK")
        //console.log(ok)
        if (!ok) {
            //return res.status(400).json({ success: false, message: "Captcha challenge failed" })
            res.status(400).send("Captcha challenge failed.")
        }

        const info = await transporter.sendMail({
            from: `${req.body.name} <${process.env.NODEMAILER_EMAIL_ADDRESS}>`, // '"Example User" <user@example.com>'
            replyTo: req.body.email,
            to: process.env.NODEMAILER_EMAIL_ADDRESS,
            subject: req.body.subject, // "Hello world?"
            html: `<p>${req.body.message}</p>`, // "<b>Hello world?</b>"
        });

        //console.log("Message sent: %s", info.messageId)
        //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

        res.status(200).send("Message sent successfully.")

    } catch (error) {
        res.status(500).send("An error occurred while trying to send a message: " + error.message)
    }
})

export { router as sendContactMessage }