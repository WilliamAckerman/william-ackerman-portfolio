import express from 'express';
import supabase from '../supabaseClient.js';

const router = express.Router();

// GET featured skills only
router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from("skills")
        .select("id, name, category, color, icon_name")
        .eq("featured", true)
        .order("type_id");

    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

export default router;