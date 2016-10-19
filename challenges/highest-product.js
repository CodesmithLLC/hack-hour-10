/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  const sorted = array.sort((a, b) => a - b);
  const newArr = [sorted[sorted.length - 1], sorted[sorted.length - 2], sorted[sorted.length - 3]];
  return newArr.reduce((prev, curr) => prev * curr);
}


module.exports = highestProduct;
