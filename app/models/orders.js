module.exports = function (app) {
    var store  = app.get('rethinkdb');
    var orders = {};

    orders.all = function () {
        return store.all();
    }

    return orders;
}
