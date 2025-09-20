import express from 'express';
import pool from '../db.js';
const router = express.Router();

// GET all skills
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM skills ORDER BY type_id, name');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
});

export default router;