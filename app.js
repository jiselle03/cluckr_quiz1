const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const app = express();

// Import routes
const indexRouter = require('./routes/index');
const clucksRouter = require('./routes/clucks');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    const username = req.cookies.username;
    const avatar = req.cookies.avatar;
    res.locals.signInUser = username || '';
    res.locals.avatarUrl = avatar || 'https://ibb.co/mG3Q1kw';
    next();
});
app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method;
     delete req.body._method;
    return method;
  }
})
);

// Route Middleware
app.use('/', indexRouter);
app.use('/clucks', clucksRouter);

const PORT = process.env.PORT || 3000;
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`Listening at http://${DOMAIN}:${PORT} in ${app.get('env')} environment`);
});

module.exports = app;
