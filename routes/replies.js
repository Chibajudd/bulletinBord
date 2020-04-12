const express = require('express');
const router = express.Router();

//返信受信
router.post('/', (req, res) => {
    res.redirect('/messages');
});

module.exports = router;