const express = require('express');
const router = express.Router();

const db = require('../models/index');

console.log(db.reply);

//返信受信
router.post('/:id', (req, res) => {
    const params = {
        message_id:req.params.id,
        test_id:req.params.id,
        content:req.body.replyContent
    };
    db.reply.create(params).then((results)=>{
        res.redirect(`/messages/${req.params.id}`);
        console.log(db.reply);
    });
});

module.exports = router;