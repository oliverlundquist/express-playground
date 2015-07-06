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
// if(require.main === module) {
//     app.listen(3000);
// }
app.listen(3000);

// expose app so that we can use it in tests
module.exports = app;
