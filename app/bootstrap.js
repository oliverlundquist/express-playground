// load newrelic agent
require('newrelic');

// load .env file
require('dotenv').load();

// load modules
module.exports = function (app) {
    app.set('_', require('lodash'));
    app.set('rethinkdb', require('./stores/rethinkdb')(app));
};
