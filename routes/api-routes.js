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

//Handling the delete request

router.post('/deleteNote/:noteId', (req, res) => {
    console.log(req.params.noteId);
    const deleteNotes = noteId.filter(item => item.noteId != req.params.noteId);
    dbNotes = deleteNotes;
    return res.redirect('/');
});

router.get('/notes/:noteId', (req, res) => {
    res.json(dbNotes[req.params.noteId]);
})

module.exports = router;