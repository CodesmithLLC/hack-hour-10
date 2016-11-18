'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const result = [...Array(1000).keys()].reduce((sum, num) => {
    if (num % 3 === 0 || num % 5 === 0) return sum + num;
    return sum;
  }, 0);
  return result;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const result = [...Array(z).keys()].reduce((sum, num) => {
    if (num % x === 0 || num % y === 0) return sum + num;
    return sum;
  }, 0);
  return result;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};
module.exports = objectToExport;
