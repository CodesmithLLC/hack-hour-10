
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return Array
    .from( { length: 1000 }, (el, index) => index)
    .filter(item => item % 3 === 0 || item % 5 === 0)
    .reduce((all, item) => all + item);
}

// console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z

function sumMultiplesXOrYBelowZ (x,y,z) {
  return Array
    .from( { length: z }, (el, index) => index)
    .filter(item => item % x === 0 || item % y === 0)
    .reduce((all, item) => all + item);
}

// console.log(sumMultiplesXOrYBelowZ(3,5,1000));


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
