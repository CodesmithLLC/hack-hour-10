
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  const largest = array.reduce((prev, curr) => prev > curr ? prev : curr);
  array.splice(array.indexOf(largest), 1); 
  const second = array.reduce((prev, curr) => prev > curr ? prev : curr);
  array.splice(array.indexOf(second), 1); 
  const third = array.reduce((prev, curr) => prev > curr ? prev : curr);
  return largest * second * third;
}


module.exports = highestProduct;