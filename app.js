const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session= require('express-session');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const cadastroRouter = require('./routes/cadastro');
const agendamentoRouter = require('./routes/agendamento');
const procedimentoRouter = require('./routes/procedimentos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(session({
  secret: 'test',
  resave: false,
  saveUninitialized: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/cadastro', cadastroRouter);
app.use('/agendamento', agendamentoRouter);
app.use('/procedimento',procedimentoRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
