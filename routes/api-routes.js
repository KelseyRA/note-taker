const express = require('express');
const router = express.Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

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
            noteId: uuidv4()
        }
        const dbNotes = db
        dbNotes.push(newNote);
        console.log(dbNotes)
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbNotes));
        res.status(200).json(dbNotes);
    }
})

module.exports = router;