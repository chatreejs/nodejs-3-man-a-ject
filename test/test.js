var Compass = require('../Compass')
var DescriptionIcon = require('../DescriptionIcon')

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