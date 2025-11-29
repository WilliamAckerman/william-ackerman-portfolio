import express from 'express'
import { createChallenge } from 'altcha-lib';
const app = express()
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const challenge = await createChallenge({
            hmacKey: process.env.HMAC_KEY,
            maxNumber: 100000,
        })

        return res.status(200).json(challenge)
    } catch (error) {
        return res.status(400).send("Failed to create challenge:", error.message)
    }
    /*try {
        const challenge = await createChallenge({
            hmacKey: ALTCHA_HMAC_KEY,
            maxNumber: 50_000
        })

        return c.json(challenge)
    } catch (error) {
        return c.json({
            error: "Failed to create challenge",
            details: error.message
        }, 500)
    }*/
    /*const formData = await c.req.formData()
    const altchaToken = formData.get('altcha')

    if (!altchaToken) {
        return c.json({ error: 'Altcha payload missing' }, 400);
    }

    const verified = await verifySolution(String(altchaToken), ALTCHA_HMAC_KEY)

    if (!verified) {
        return c.json({ error: 'Invalid Altcha payload' }, 400);
    }

    return c.json({ ok: true })*/
})

export { router as altchaChallenge }