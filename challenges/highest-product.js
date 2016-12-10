/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort((a, b) => {
    return b - a;
  });
  return array[0] * array[1] * array[2];
}


module.exports = highestProduct;

//console.log(highestProduct([1, 2, 3, -1000, 100, 2]));