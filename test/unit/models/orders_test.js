var APP_PATH = process.cwd() + '/';
var sinon    = require('sinon');
var expect   = require('chai').expect;

describe('orders', function () {
    it('should call all on store', function () {
        var stub  = sinon.stub();
        var store = { all: stub }
        var app   = { get: function () { return store } }

        // call orders.all function
        require(APP_PATH + 'app/models/orders')(app).all();

        expect(stub.callCount).to.equal(1);
    });
});
