const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
}

//create a hot-dog

app.post('/api/create', async (req, res) => {
    try {
        console.log(req.body);
        const { img, title, price, description } = req.body;

        const newHotDog = await pool.query(
            "INSERT INTO hotdogs (img, title, price, description) VALUES($1, $2, $3, $4) RETURNING *",
            [img, title, price, description]
        );
        res.json(newHotDog.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//get all hot-dogs

app.get('/api', async(req, res) => {
    try {
        const allHotDogs = await pool.query("SELECT * FROM hotdogs");
        allHotDogs.rows.sort(function(a, b){
            return b.price - a.price; 
        })
        res.json(allHotDogs.rows);
    } catch (error) {
        console.error(err.message);
    }
})

//update

app.put("/api/update/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const { img, title, price, description } = req.body;
        const updateHotDog = await pool.query(
            "UPDATE hotdogs SET img = $1, title = $2, price = $3, description = $4 WHERE hotdog_id = $5",
            [img, title, price, description, id]
        );
        res.json('Hot dog was updated!');
    } catch (error) {
        console.error(error.message);
    }
})

//delete

app.delete('/api/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteHotDog = await pool.query("DELETE FROM hotdogs WHERE hotdog_id = $1", [id]);
        res.json('Hot Dog was deleted!');
    } catch (error) {
        console.error(error.message);
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`)
})