module.exports.connect = function (app) {
    return function (req, res, next) {
        app.get('rethinkdb').connect().then(function (connection) {
            app.get('rethinkdb').setConnection(connection);
            next();
        }).error(next);
    }
};

module.exports.disconnect = function (app) {
    return function (req, res, next) {
        // req.on('finish', function() {
            console.log('after middleware');
            app.get('rethinkdb').disconnect().then(function (result) {
                    console.log('disconnected');
                    next();
                }).error(next);
        // });
    }
};

module.exports.disconnectIfError = function (app) {
    return function (err, req, res, next) {
        app.get('rethinkdb')
            .disconnect()
            .then(function (result) {
                next(err);
            })
            .error(function (error) {
                next(err);
            })
            .finally(function () {
                next(err);
            });
    }
};
