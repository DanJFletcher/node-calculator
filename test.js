
var math = require('./math');
var assert = require('assert');

describe('Math', function () {
    describe('#add()', function () {
        it('should add two numbers', function () {
            assert.equal(math.add(1, 2), 3);
        });
    });

    describe('#sub()', function () {
        it('should subtract two numbers', function () {
            assert.equal(math.sub(5, 2), 3);
        });
    });

    describe('#mult()', function () {
        it('should multiply two numbers', function () {
            assert.equal(math.mult(1.5, 2), 3);
        });
    });

    describe('#div()', function () {
        it('should divide two numbers', function () {
            assert.equal(math.div(6, 2), 3);
        });
        it('should return Infinity if divide by zero', function () {
            assert.equal(math.div(5, 0), Math.Infinity);
        });
    });
});