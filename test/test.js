var request = require('superagent');
var expect  = require('chai').expect
var app     = require('../server');
var API_URL = process.env.API_URL;

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

// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     });
//   });
// });
