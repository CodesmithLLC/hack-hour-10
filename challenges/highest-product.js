/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct1(arr) {
  if (arr.length < 3) return 0;

  let sortedArr = arr.sort((a, b) => a - b);
  let negMax = arr[0] * arr[1] * arr[arr.length - 1];
  let posMax = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
  return posMax >= negMax ? posMax : negMax;
}

















function highestProduct(array) {
  if (arr.length < 3) return 0;
  
  array = array.sort((a, b) => {return a - b;});
  
  let firstTwo = array[0] * array[1] * array[array.length-1];
  let lastThree = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  return firstTwo >= lastThree ? firstTwo : lastThree;
}

module.exports = highestProduct;
