var Compass = require('../Compass');
var DescriptionIcon = require('../DescriptionIcon');
var QueueJA = require('../QueueJA');

var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;

describe('Test Compass function', function () {
    it('test:getDirection North', function () {
        var c = new Compass();
        var res = c.getDirection(0);
        assert.strictEqual(res, "N");
    });

    it('test:getDirection East', function () {
        var c = new Compass();
        var res = c.getDirection(90);
        assert.strictEqual(res, "E");
    });

    it('test:getDirection South', function () {
        var c = new Compass();
        var res = c.getDirection(180);
        assert.strictEqual(res, "S");
    });

    it('test:getDirection West', function () {
        var c = new Compass();
        var res = c.getDirection(270);
        assert.strictEqual(res, "W");
    });

    it('test:getDirection Northeast', function () {
        var c = new Compass();
        var res = c.getDirection(45);
        assert.strictEqual(res, "NE");
    });

    it('test:getDirection Southeast', function () {
        var c = new Compass();
        var res = c.getDirection(135);
        assert.strictEqual(res, "SE");
    });

    it('test:getDirection Southwest', function () {
        var c = new Compass();
        var res = c.getDirection(225);
        assert.strictEqual(res, "SW");
    });

    it('test:getDirection Northwest', function () {
        var c = new Compass();
        var res = c.getDirection(315);
        assert.strictEqual(res, "NW");
    });

    it('test:getDirection North-northeast', function () {
        var c = new Compass();
        var res = c.getDirection(21);
        assert.strictEqual(res, "NNE");
    });

    it('test:getDirection East-northeast', function () {
        var c = new Compass();
        var res = c.getDirection(70);
        assert.strictEqual(res, "ENE");
    });

    it('test:getDirection East-southeast', function () {
        var c = new Compass();
        var res = c.getDirection(110);
        assert.strictEqual(res, "ESE");
    });

    it('test:getDirection South-southeast', function () {
        var c = new Compass();
        var res = c.getDirection(160);
        assert.strictEqual(res, "SSE");
    });

    it('test:getDirection South-southwest', function () {
        var c = new Compass();
        var res = c.getDirection(200);
        assert.strictEqual(res, "SSW");
    });

    it('test:getDirection West-southwest', function () {
        var c = new Compass();
        var res = c.getDirection(250);
        assert.strictEqual(res, "WSW");
    });

    it('test:getDirection West-northwest', function () {
        var c = new Compass();
        var res = c.getDirection(290);
        assert.strictEqual(res, "WNW");
    });

    it('test:getDirection North-northwest', function () {
        var c = new Compass();
        var res = c.getDirection(340);
        assert.strictEqual(res, "NNW");
    });
});

describe('Test Description Icon function', function () {
    it('test:get icon clear at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("Clear", hour);
        assert.strictEqual(res, "clear-day");
    });

    it('test:get icon clear at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("Clear", hour);
        assert.strictEqual(res, "clear-night");
    });

    it('test:get icon cloud at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("few clouds", hour);
        assert.strictEqual(res, "partly-cloudy-day");
    });

    it('test:get icon cloud at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("few clouds", hour);
        assert.strictEqual(res, "partly-cloudy-night");
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
