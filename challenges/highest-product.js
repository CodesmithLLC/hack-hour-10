/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, product = 1, count = 3) {
  array.sort();
  return Math.max(array[0] * array[1] * array[2], array[0] * array[array.length - 1] * array[array.length - 2]);
  // return !array || array.length < count
  //   ? 0
  //   : !count
  //     ? product
  //     : array.length <= count
  //       ? product * array.reduce((a, c) => a * c)
  //       : Math.max(highestProduct(array.slice(1), array[0] * product, count - 1), highestProduct(array.slice(1), product, count));
}

module.exports = highestProduct;

