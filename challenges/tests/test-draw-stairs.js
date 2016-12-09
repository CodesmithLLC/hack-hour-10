'use strict';
let chai = require('chai');
let expect = chai.expect;

let drawStairs = require('../draw-stairs.js');



describe('Testing draw stairs function', function(){
	it('draw-stairs(0) should return an empty string', function(){
		let drawStairs0 = drawStairs(0);
		expect(drawStairs0).to.equal('');
	})
	it('draw-stairs(5) should return 5 steps \
		with 5 asterisks on bottom step', function(){
		let fizzbuzz5 = drawStairs(5);
		expect(fizzbuzz5).to.equal('    *\n   **\n  ***\n ****\n*****');
	});
});
