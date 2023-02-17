// All required imports.

const express = require('express');
const router = express.Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');


// API routes.

router.get('/notes', (req, res) => {
    const dbNotes = db
    res.json(dbNotes)
});

router.post('/notes', (req, res) => {

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        }
        const dbNotes = db
        dbNotes.push(newNote);
        console.log(dbNotes)
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbNotes));
        res.status(200).json(dbNotes);
    }
})

//Handling the delete request. This is not working currently.

router.delete('/note/:id', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        console.log(data);
        deleteNotes = JSON.parse(data);
        deleteNotes = deleteNotes.filter((item) => {
            let url = req.query.identify;
            return item.id !== url;
        })

        console.log(deleteNotes)
        // let json = JSON.stringify(deleteNotes);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(deleteNotes));
        res.status(200).json(deleteNotes);
    })
})


module.exports = router;