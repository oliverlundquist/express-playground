module.exports = function (app) {
    return function (req, res, next) {
        // check api token
        next();
    }
};
