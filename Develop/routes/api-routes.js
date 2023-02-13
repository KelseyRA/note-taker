const express = require('express');
const router = express.Router();
const { getNotes } = require('../public/assets/js/index')

router.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`)
    getNotes('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = router;