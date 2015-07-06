var APP_PATH = process.cwd() + '/';
var app      = require(APP_PATH + 'server');
var request  = require('superagent');
var expect   = require('chai').expect;
var API_URL  = process.env.API_URL;

describe('GET #index', function () {
    it('should return 200', function (done) {
        request.get(API_URL + '/')
            .end(function (err, res) {
                expect(res.status).to.equal(200);
                expect(res.text).to.contain('注文　花子');
                done();
            });
    });
});
