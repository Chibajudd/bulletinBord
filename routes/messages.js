const express = require('express');
const router = express.Router();

const db = require('../models/index');

//一覧表示
router.get('/', (req, res) => {
    db.message.findAll().then((results)=>{
        res.render('messages.ejs', { messages: results});
    });
});

//投稿
router.post('/', (req, res) => {
    const params = {
        content:req.body.messageContent
    };
    db.message.create(params).then((results)=>{
        res.redirect('/messages');
    });
});

//投稿画面表示
router.get('/new', (req, res) => {
    res.render('new_message.ejs');
});

//削除
router.delete('/:id', (req, res) => {
    const filter = {
        where:{
            id:req.params.id
        }
    };
    db.message.destroy(filter).then((results)=>{
        res.redirect('/messages');
    });
});

//編集画面表示
router.get('/:id/edit', (req, res) => {
    db.message.findByPk(req.params.id).then((results)=>{
        res.render('edit_message.ejs', {message:results});
    });
});

//更新
router.put('/:id/edit', (req, res) => {
    const params = {
        content:req.body.messageContent
    };
    const filter = {
        where:{
            id:req.params.id
        }
    };
    db.message.update(params,filter).then((results)=>{
        res.redirect('/messages');
    });
});

//詳細表示
router.get('/:id', (req, res) => {
    db.message.findByPk(req.params.id).then((results)=>{
        res.render('message.ejs', { message: results });
    });
});

module.exports = router;