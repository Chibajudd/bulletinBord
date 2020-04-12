const express = require('express');
const router = express.Router();

//一覧表示
router.get('/', (req, res) => {
    res.render('messages.ejs', { title: "message", id: 1 });
});

//投稿
router.post('/', (req, res) => {
    res.redirect('/messages')
});

//投稿画面表示
router.get('/new', (req, res) => {
    res.render('new_message.ejs');
});

//削除
router.delete('/:id', (req, res) => {
    res.redirect('/messages');
});

//編集画面表示
router.get('/:id/edit', (req, res) => {
    res.render('edit_message.ejs', { id: req.params.id });
});

//更新
router.put('/:id/edit', (req, res) => {
    res.redirect('/messages');
});

//詳細表示
router.get('/:id', (req, res) => {
    res.render('message.ejs', { id: req.params.id });
});

module.exports = router;