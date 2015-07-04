module.exports.index = function (app) {
    var Orders = require('../models/orders')(app);

    return function (req, res, next) {
        Orders.all()
            .then(function (cursor) {
                return cursor.toArray();
            })
            .then(function (data) {
                console.log('returning response');
                res.json(data);
                next();
            })
            .error(next)
            .finally(next);
    }
};
