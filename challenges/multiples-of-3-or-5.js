'use strict';
// list all the natural numbers below 10 that are ultiples of 3 or 5 we get 3 ,5, 6, an d 9. the sum of these ultipels i 23

// write a function that will fnind the sum of all the multiples of 3 or 5 below 1000 and return that sum

// extension make it dynamic funcition that takes input x y z and returns th esum of multipels of x and y below x

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 1000);
}

function sumMultiplesXOrYBelowZ(x,y,z) {
  if (x === y) return x * ((Math.floor((z - 1) / x) * (Math.floor((z - 1) / x) + 1)) / 2);
  return x * ((Math.floor((z - 1) / x) * (Math.floor((z - 1) / x) + 1)) / 2) +
  y * ((Math.floor((z - 1) / y) * (Math.floor((z - 1) / y) + 1)) / 2) -
  x * y * Math.floor((z-1) / (x * y)) * 
  (Math.floor((z-1) / (x * y)) + 1) / 2
}


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
