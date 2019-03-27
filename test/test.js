var Compass = require('../Compass')
var DescriptionIcon = require('../DescriptionIcon')
var QueueJA = require('../QueueJA')

var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;

describe('Test Compass function', function () {
    it('getDirection North test', function () {
        var c = new Compass();
        var res = c.getDirection(0);
        assert.strictEqual(res, "N");
        console.log("Pass " + res);
    });

    it('getDirection East test', function () {
        var c = new Compass();
        var res = c.getDirection(90);
        assert.strictEqual(res, "E");
        console.log("Pass " + res);
    });

    it('getDirection South test', function () {
        var c = new Compass();
        var res = c.getDirection(180);
        assert.strictEqual(res, "S");
        console.log("Pass " + res);
    });

    it('getDirection West test', function () {
        var c = new Compass();
        var res = c.getDirection(270);
        assert.strictEqual(res, "W");
        console.log("Pass " + res);
    });
});

describe('Test Description Icon function', function () {
    it('get icon clear test at 0:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("Clear", hour);
        assert.strictEqual(res, "clear-day")
    });

    it('get icon clear test at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("Clear", hour);
        assert.strictEqual(res, "clear-night")
    });
});

describe('Test Queue function', function () {
    it('test:enqueue ', function () {
        var q = new QueueJA(10);
        q.enqueue(10);
        var res = q.getSize();
        assert.strictEqual(res, 1);
    });

    it('test:dequeue ', function () {
        var q = new QueueJA(10);
        q.enqueue("A");
        q.enqueue("B");
        var res = q.dequeue();
        assert.strictEqual(res, "A");
    });

    it('test:get front at position 0', function () {
        var q = new QueueJA(10);
        q.enqueue("A");
        q.enqueue("B");
        var res = q.getFront();
        assert.strictEqual(res, "A");
    });

    it('test:isEmpty', function () {
        var q = new QueueJA(10);
        var res = q.isEmpty();
        assert.strictEqual(res, true);
    });

    it('test:isFull', function () {
        var q = new QueueJA(3);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        var res = q.isFull();
        assert.strictEqual(res, true);
    });

    it('test:clear', function () {
        var q = new QueueJA(3);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.clear();
        var res = q.isEmpty();
        assert.strictEqual(res, true);
    });

    it('test:size', function () {
        var q = new QueueJA(3);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        var res = q.getSize();
        assert.strictEqual(res, 3);
    });
});