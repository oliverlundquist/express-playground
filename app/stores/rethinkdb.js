var r = require('rethinkdb');
var Promise = require('bluebird');
var conn = null;

module.exports = function (app) {
    var store = {};

    store.connect = function () {
        return r.connect({host: process.env.RETHINKDB_HOST, timeout: 5});
    }

    store.setConnection = function (connection) {
        conn = connection;
    }

    store.all = function () {
        return new Promise(function (resolve, reject) {
            r.table('orders').run(conn)
                .then(function (cursor) { resolve(cursor.toArray()); })
                .error(reject);
        });
    }

    store.disconnect = function () {
        return conn.close();
    }

    return store;
}
