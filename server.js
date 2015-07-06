var express    = require('express');
var app        = express();
var bootstrap  = require('./app/bootstrap');
var routes     = require('./app/routes');
var middleware = require('./app/middleware');
var errors     = require('./app/errors');

// bootstrap
bootstrap(app);

// pre-route middleware
middleware.before(app);

// register routes
routes(app);

// post-route middleware
middleware.after(app);

// register errorhandlers
errors(app);

// start server
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

// expose app so that we can use it in tests
module.exports = app;
