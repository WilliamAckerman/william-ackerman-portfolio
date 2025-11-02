import express from 'express';
import { supabase } from '../supabaseClient.js';

const app = express()
const router = express.Router()

router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('test')
        .select()
    console.log(data)
    res.send(data)
    //res.send("FetchTest working")
})

/*function fetchTest() {

    app.get('/test', async (req, res) => {
        const { data, error } = await supabase
            .from('test')
            .select()
        res.end(data)
    })
}*/

export { router as fetchTest };