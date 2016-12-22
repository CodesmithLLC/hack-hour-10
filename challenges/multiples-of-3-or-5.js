// If we list all the natural numbers below 10 that are mupltiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
// Write a function that will find the sum of all the multiples of 3 or 5 below 1000 and return that sum.

function sumMultiples30or5Below1000() {
let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
return sum;
}

// Extension make it dynamic function that takes input x, y, z and returns the sum of multiples of x and y below z.

function sumMultiplesofXOrYBelowZ(x, y, z) {
let i = Math.min(x, y);
let sum = 0;
  for (i; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }
return sum;
}

var objectToExport = {
  sumMultiples30or5Below1000: sumMultiples30or5Below1000,
  sumMultiplesofXOrYBelowZ: sumMultiplesofXOrYBelowZ
};

module.exports = objectToExport;

// LOOK UP:
// arithmetic sequence sum formula
// for 1 - 10
// sum numbers (1 - 4) * 2