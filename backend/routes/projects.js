import express from 'express';
import supabase from "../supabaseClient.js";

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

export default router;