/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  if (!array || array.length < 3) return 0;
  let sorted = array.sort((a, b) => a - b);
  let length = sorted.length - 1;
  return Math.max((sorted[length] * sorted[length - 1] * sorted[length - 2]), 
    sorted[0] * sorted[1] * sorted[length]);
}

console.log(highestProduct());

module.exports = highestProduct;
