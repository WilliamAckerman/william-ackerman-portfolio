import express from 'express'
import { createChallenge } from 'altcha-lib';
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const challenge = await createChallenge({
            hmacKey: process.env.HMAC_KEY,
            maxNumber: 100000,
        })

        return res.status(200).json(challenge)
    } catch (error) {
        return res.status(500).send("Failed to create challenge:", error.message)
    }
})

export { router as altchaChallenge }