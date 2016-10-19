/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort((a, b) => {return a - b;});
  
  let firstTwo = array[0] * array[1] * array[array.length-1];
  let lastThree = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  return firstTwo >= lastThree ? firstTwo : lastThree;
}

module.exports = highestProduct;
