import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from("projects")
        .select("id, title, project_image_link, description, start_date, end_date")
        .eq("featured", true);
    
    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

export default router;