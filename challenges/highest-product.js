/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array, count = 3, multiply = 1) {

   if (!array) return 0;
   if (array.length < 3) return 0;
   if (count === 0) return multiply;
   return Math.max(
    highestProduct(array.slice(1), count - 1, multiply * array[0],
    highestProduct(array.slice(1), count, multiply)
);

 }


module.exports = highestProduct;
