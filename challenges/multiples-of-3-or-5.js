"use strict";
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5 below 1000 and return that sum.


function sumMultiples3Or5Below1000() {
  let sum = 0;
  for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z and returns the sum of multiples of x and y below z

function sumMultiplesXOrYBelowZ(x,y,z) {
  let sum = 0;
  // function multipleCounter(num, goal) {
  //   let max = ((goal - 1) - ((goal - 1) % num)) / num;
  //   while (max > 0) {
  //     sum += (num * max);
  //     max--;
  //   }
  // }
  // multipleCounter(x,z);
  // multipleCounter(y,z);
  // return sum;
  let max1 = ((z - 1) - ((z - 1) % x)) / x;
  let max2 = ((z - 1) - ((z - 1) % y)) / y;

  while (max1 > 0) {
    sum += (x * max1);
    max1--;
  }
  while (max2 > 0) {
    if ((y* max2) % x !== 0) {
      sum += (y * max2);
      max2--;
    }
  }
  return sum;
}

var objectToExport = {
  sumMultiples3Or5Below1000:sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ:sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;

console.log(sumMultiplesXOrYBelowZ(3,5,1000));
