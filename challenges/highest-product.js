/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  console.log(array)
  if (array.length < 3) return 0;
  array.sort();
  return Math.max(array[0] * array[1] * array[array.length - 1], array[array.length - 1] * array[array.length - 2] * array[array.length - 3]);
}

module.exports = highestProduct;

