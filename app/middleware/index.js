var token = require('./token');
var rethinkdb = require('./rethinkdb');

module.exports.before = function (app) {
    app.use(token(app));
    app.use(rethinkdb.connect(app));
};

module.exports.after = function (app) {
    app.use(rethinkdb.disconnect(app));
    // app.use(rethinkdb.disconnectIfError(app));
};
