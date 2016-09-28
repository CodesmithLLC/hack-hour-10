'use strict';
let chai = require('chai');
let expect = chai.expect;

let fizzbuzz = require('./fizzbuzz.js');



describe('fizzbuzzTesting', function(){
	it('fizzbuzz(5) should return: 1 2 fizz 4 buzz', function(){
		let fizzbuzz5 = fizzbuzz(5);
		expect(fizzbuzz5).to.equal('1\n2\nfizz\n4\nbuzz');
	});
	it('fizzbuzz(16) should return: 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16',function(){
		let fizzbuzz16 = fizzbuzz(16);
		expect(fizzbuzz16).to.equal('1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16');
	});
});
