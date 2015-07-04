var r = require('rethinkdb');
var conn = null;

module.exports = function (app) {
    var store = {};

    store.connect = function () {
        return r.connect({ host: process.env.RETHINKDB_HOST, timeout: 5 });
    }

    store.setConnection = function (connection) {
        conn = connection;
    }

    store.all = function () {
        return r.table('orders').run(conn);
    }

    store.disconnect = function () {
        return conn.close();
    }

    return store;
}
