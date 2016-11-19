'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return new Array(1000).fill(undefined)
    .reduce((sum, elem, idx) => (idx % 3 === 0 || idx % 5 === 0) ? sum += idx : sum, 0);
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  return new Array(z).fill(undefined)
    .reduce((sum, elem, idx) => (idx % x === 0 || idx % y === 0) ? sum += idx : sum, 0);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
