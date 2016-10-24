/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) throw new Error();
  const sorted = array.sort((a,b) => a < b);
  let result = 1;
  let resWithNeg = 1;
  let neg = 0;
  let pos = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < 0) {
      neg++;
    } else if (sorted[i] > 0) {
      pos++;
    }
  }
  if (neg === sorted.length) {
    for (let i = 0; )
  }
  if (neg >= 2) {
    resWithNeg *= sorted[sorted.length - 1];
    resWithNeg *= sorted[sorted.length - 2];
    resWithNeg *= sorted[0];
  }
  for (let i = 0; i < 3; i++) {
    result *= sorted[i];
  }
  return Math.max(result, resWithNeg);
}

module.exports = highestProduct;
