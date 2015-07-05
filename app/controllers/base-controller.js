module.exports.index = function (app) {
    var Orders = require('../models/orders')(app);

    return function (req, res, next) {
        Orders.all().then(function (data) {
            res.json(data);
            next();
        })
        .error(next);
    }
};
