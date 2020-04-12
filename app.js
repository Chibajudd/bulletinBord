var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var methodOverride = require('method-override');
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

//ここから書き始める
app.get('/',(req,res)=>{
  res.redirect('/messages');
});

//一覧表示
app.get('/messages',(req,res)=>{
  res.render('messages.ejs',{title:"message",id:1});
});

//投稿
app.post('/messages',(req,res)=>{
  res.redirect('/messages')
});

//投稿画面表示
app.get('/messages/new',(req,res)=>{
  res.render('new_message.ejs');
});

//削除
app.delete('/messages/:id',(req,res)=>{
  res.redirect('/messages');
});

//編集画面表示
app.get('/messages/:id/edit',(req,res)=>{
  res.render('edit_message.ejs',{id:req.params.id});
});

//更新
app.put('/messages/:id/edit',(req,res)=>{
  res.redirect('/messages');
});

//詳細表示
app.get('/messages/:id',(req,res)=>{
  res.render('message.ejs',{id:req.params.id});
});

//返信受信
app.post('/replies',(req,res)=>{
  res.redirect('/messages');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
