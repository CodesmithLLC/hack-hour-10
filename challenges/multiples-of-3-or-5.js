// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Write a function that will find the sum of all the 
// multiples of 3 or 5 below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  for (let i = 3; i < 1000; i += 3) {
    sum += i;
  }

  for (let i = 5; i < 1000; i += 5) {
    if (i % 3 !== 0) sum += i;
  }
  
  return sum;
}

// Brute force
// function sumMultiples3Or5Below1000() {
//   let sum = 0;

//   for (let i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }

//   return sum;
// }

// Extension make it dynamic function that takes input x, y, z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  for (let i = x; i < z; i += x) {
    sum += i;
  }

  for (let i = y; i < z; i += y) {
    if (i % x !== 0) sum += i;
  }
  
  return sum;
}

// console.log(sumMultiples3Or5Below1000());
// console.log(sumMultiplesXOrYBelowZ(5, 3, 1000));

const objectToExport = {
  sumMultiples3Or5Below1000: sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ: sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;