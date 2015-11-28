var express = require('express'),
    router = express.Router(),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    kue = require('kue'),
    config = require('config'),
    stormpath = require('express-stormpath'),
    _ = require('lodash');

require('dotenv').load();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'))
   .set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'))
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false }))
   .use(cookieParser())
   .use(express.static(path.join(__dirname, 'public')));

var stations = require('./app/routes/station/stations.js'),
    index = require('./app/routes/index.js'),
    users = require('./app/routes/user/users.js');

router.use('/stations', stations);

app.use(stormpath.init(app, {
  apiKeyId: process.env.STORMPATH_CLIENT_APIKEY_ID,
  apiKeySecret: process.env.STORMPATH_CLIENT_APIKEY_SECRET,
  application: process.env.STORMPATH_APPLICATION_HREF,
  website: true,
  expand: {
    apiKeys: true
  }
}));

app.use('/api', stormpath.apiAuthenticationRequired, router);
app.use(users);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
kue.app.listen('3001');
