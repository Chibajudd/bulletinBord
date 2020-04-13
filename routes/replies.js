const express = require('express');
const router = express.Router();

const db = require('../models/index');

//返信受信
router.post('/', (req, res) => {
    const params = {
        content:req.body.replyContent
    };
    db.reply.create(params).then((results)=>{
        res.redirect('/messages');
    });
});

module.exports = router;