'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  for (let i = 3, j = 5, k = 15; i < 1000; i += 3, j += 5, k += 15) {
    if (i < 1000) sum += i;
    if (j < 1000) sum += j;
    if (k < 1000) sum -= k;
  }
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for (let i = x, j = y, k = x * y ; i < z || j < z; i += x, j += y, k += x * y) {
    if (i < 1000) sum += i;
    if (j < 1000) sum += j;
    if (k < 1000) sum -= k;
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
