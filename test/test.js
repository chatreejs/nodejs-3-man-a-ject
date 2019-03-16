var Compass = require('../Compass.js');
var compass = new Compass();

var assert = require("chai").assert;
var mocha = require('mocha');
var describe = mocha.describe;

describe ('Test Compass function', function(){
    it('getDirection North test', function(){
        var c = new Compass();
        var res = c.getDirection(0);
        assert.strictEqual(res, "N");
        console.log("Pass " + res);
    });

    it('getDirection East test', function(){
        var c = new Compass();
        var res = c.getDirection(90);
        assert.strictEqual(res, "E");
        console.log("Pass " + res);
    });

    it('getDirection South test', function(){
        var c = new Compass();
        var res = c.getDirection(180);
        assert.strictEqual(res, "S");
        console.log("Pass " + res);
    });
});