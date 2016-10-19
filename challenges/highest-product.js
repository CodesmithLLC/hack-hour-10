/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) return 0;
  let sorted = array.sort((a, b) => a - b);
  let length = sorted.length - 1;
  return Math.max((sorted[length] * sorted[length - 1] * sorted[length - 2]), 
    sorted[0] * sorted[1] * sorted[length]);
}

// console.log(highestProduct([1, 2, 3, -5, -8]));

module.exports = highestProduct;
