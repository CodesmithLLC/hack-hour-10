<<<<<<< HEAD


function sumMultiples3Or5Below1000() {
  var threes = (Math.floor((1000 - 1) / 3) * Math.floor((1000 - 1) / 3) + Math.floor((1000 - 1) / 3)) / 2 * 3;
  var fives = (Math.floor((1000 - 1) / 5) * Math.floor((1000 - 1) / 5) + Math.floor((1000 - 1) / 5)) / 2 * 5;
  var fifteens = (Math.floor((1000 - 1) / 15) * Math.floor((1000 - 1) / 15) + Math.floor((1000 - 1) / 15)) / 2 * 15;
  return threes + fives - fifteens;
}


function sumMultiplesXOrYBelowZ (x, y, z) {
  var first = (Math.floor((z - 1) / x) * Math.floor((z - 1) / x) + Math.floor((z - 1) / x)) / 2 * x;
  var second = (Math.floor((z - 1) / y) * Math.floor((z - 1) / y) + Math.floor((z - 1) / y)) / 2 * y;
  var combined = (Math.floor((z - 1) / y / x) * Math.floor((z - 1) / y / x) + Math.floor((z - 1) / y / x)) / 2 * y * x;
  return first + second - combined;
}


var objectToExport={
  sumMultiples3Or5Below1000: sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ: sumMultiplesXOrYBelowZ

}

module.exports = objectToExport;
=======
'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
>>>>>>> 8fb2f351684c45e8505a6951d2712fdfd2f14111
