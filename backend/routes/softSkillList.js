import express from 'express';
import supabase from "../supabaseClient.js";

const router = express.Router();

// GET all skills
router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from("skills")
        .select("id, name, type_id, category")
        .eq("category", "Soft Skills")
        .order("name");
    
    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

export default router;