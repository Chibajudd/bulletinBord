const express = require('express');
const router = express.Router();
const passport = require('passport');

const db = require('../models/index');

router.get('/login', (req, res) => {
    res.render('sessions/new.ejs');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/messages', failureRedirect: '/login' }));

module.exports = router;