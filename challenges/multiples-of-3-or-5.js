'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let i = 2;
	while ( i++, i < 1000) {
		sum += i % 3 && i % 5 ? 0 : i;
	}
	return sum;
}

// extension make it a dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  let i = 2;
  // console.log(i);
  while (i++, i < z){
  	sum += i % x && i % y ? 0 : i;
  	// console.log('this is i AFTER', i)
  	// console.log('this is SUM', sum);
  }
  return sum;
}

// console.log(sumMultiplesXOrYBelowZ(3,5,15));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
