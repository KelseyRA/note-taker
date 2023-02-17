// All required imports.

const router = require('express').Router();
const path = require('path');

// HTML API routes.

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Exports.

module.exports = router;