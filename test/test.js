var Compass = require('../Compass');
var DescriptionIcon = require('../DescriptionIcon');
var QueueJA = require('../QueueJA');

var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;

describe('Test four cardinal directions Compass function', function () {
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
});

describe('Test four intercardinal directions Compass function', function () {
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
});

describe('Test half-winds directions Compass function', function () {
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

describe('Test Clear Description Icon function', function () {
    it('test:get icon clear at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("Clear", hour);
        assert.strictEqual(res, "clear-day");
    });

    it('test:get icon clear sky at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("clear sky", hour);
        assert.strictEqual(res, "clear-day");
    });

    it('test:get icon clear at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("Clear", hour);
        assert.strictEqual(res, "clear-night");
    });

    it('test:get icon clear sky at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("clear sky", hour);
        assert.strictEqual(res, "clear-night");
    });
});

describe('Test Cloud Description Icon function', function () {
    it('test:get icon few clouds at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("few clouds", hour);
        assert.strictEqual(res, "partly-cloudy-day");
    });

    it('test:get icon scattered clouds at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("scattered clouds", hour);
        assert.strictEqual(res, "partly-cloudy-day");
    });

    it('test:get icon broken clouds at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("broken clouds", hour);
        assert.strictEqual(res, "partly-cloudy-day");
    });

    it('test:get icon few clouds at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("few clouds", hour);
        assert.strictEqual(res, "partly-cloudy-night");
    });

    it('test:get icon scattered clouds at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("scattered clouds", hour);
        assert.strictEqual(res, "partly-cloudy-night");
    });

    it('test:get icon broken clouds at 19:00', function () {
        var d = new DescriptionIcon();
        var hour = 19;
        var res = d.getIcon("broken clouds", hour);
        assert.strictEqual(res, "partly-cloudy-night");
    });

    it('test:get icon clouds at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("Clouds", hour);
        assert.strictEqual(res, "cloudy");
    });

    it('test:get icon overcast clouds at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("overcast clouds", hour);
        assert.strictEqual(res, "cloudy");
    });
});

describe('Test Rain Description Icon function', function () {
    it('test:get icon light rain at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("light rain", hour);
        assert.strictEqual(res, "rain");
    });

    it('test:get icon moderate rain at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("moderate rain", hour);
        assert.strictEqual(res, "rain");
    });
});

describe('Test Fog Description Icon function', function () {
    it('test:get icon mist at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("Mist", hour);
        assert.strictEqual(res, "fog");
    });

    it('test:get icon haze at 6:00', function () {
        var d = new DescriptionIcon();
        var hour = 6;
        var res = d.getIcon("Haze", hour);
        assert.strictEqual(res, "fog");
    });
});

describe('Test Enqueue function', function () {
    it('test:enqueue', function () {
        var q = new QueueJA(10);
        q.enqueue(10);
        var res = q.getSize();
        assert.strictEqual(res, 1);
    });

    it('test:enqueue a full queue', function () {
        var q = new QueueJA(1);
        q.enqueue(1);
        assert.throws(() => {q.enqueue(2)}, Error, "no space is currently available");
    });
});

describe('Test Dequeue function', function () {
    it('test:dequeue', function () {
        var q = new QueueJA(10);
        q.enqueue("A");
        q.enqueue("B");
        var res = q.dequeue();
        assert.strictEqual(res, "A");
    });

    it('test:dequeue an empty queue', function () {
        var q = new QueueJA(10);
        assert.throws(() => {q.dequeue()}, Error, "this queue is empty");
    });
});

describe('Test Queue function', function () {
    it('test:get front at position 0', function () {
        var q = new QueueJA(10);
        q.enqueue("A");
        q.enqueue("B");
        var res = q.getFront();
        assert.strictEqual(res, "A");
    });

    it('test:get front an empty queue', function () {
        var q = new QueueJA(10);
        var res = q.getFront();
        assert.strictEqual(res, null);
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
