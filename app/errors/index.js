var _400 = require('./400');
var _404 = require('./404');
var _500 = require('./500');

module.exports.register = function (app) {
    app.use(_400);
    app.use(_404);
    app.use(_500);
}
