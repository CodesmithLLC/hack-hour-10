'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
	const limit = 9;
	const nums = [3, 5];
	let lcd = 1;
	let sum = 0;
	nums.forEach(n => {
		lcd *= n;
		let mults = Math.floor(limit / n);
		sum += (mults * n + n) / 2 * mults;
	});
	sum -= Math.floor(limit / lcd) * lcd;
	return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
	const limit = z - 1;
	const nums = [x, y];
	let lcd = 1;
	let sum = 0;
	nums.forEach(n => {
		lcd *= n;
		let mults = Math.floor(limit / n);
		sum += (mults * n + n) / 2 * mults;
	});
	sum -= Math.floor(limit / lcd) * lcd;
	return sum;
}

const objectToExport = {
	sumMultiples3Or5Below1000,
	sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
