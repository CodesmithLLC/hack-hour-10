'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(x = 3, y = 5, z = 1000) {
  return adder(x, y, z); 
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  return adder(x, y, z);
}

function adder(first, second, c) {
        var array = Array.from(Array(c + 1).keys());
        array.shift();
        return array.reduce((a, b) => {
                console.log(a, b)
                if(!(b % first) || !(b % second)) return a += b;
                else return a += 0;
        }, 0);
}


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
