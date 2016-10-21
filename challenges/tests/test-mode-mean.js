'use strict';
let chai = require('chai');
let expect = chai.expect;

let modemean = require('../mode-mean.js');

describe("Testing modemean", function(){
	it("modemean should return on empty array", function(){
		expect(modemean([])).to.equal(false);
	});
	it("modemean should return true with array[3,3,3]",function(){
		expect(modemean([3,3,3])).to.equal(true);
	});
	it("modemean should return true with array [1,2,2,2,2,3,4,5,6,7,7,7,7,8,9,10,10,10,12,14,15,16]",function(){
		expect(modemean([1,2,2,2,2,3,4,5,6,7,7,7,7,8,9,10,10,10,12,14,15,16])).to.equal(true);
	});

});
