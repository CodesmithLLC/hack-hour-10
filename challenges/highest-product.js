/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  var highest = 0;
  function findHigh(arr, count, high) {
    highest = high > highest? high: highest;
    if(count === 3 || arr[0] === undefined) {
      return false;
    }
    return findHigh(arr.slice(1), count, high) || findHigh(arr.slice(1), count + 1, arr[0] * high);
  }
  findHigh(array, 0, 1);
  return array[0] === undefined ? 0: highest;
}

module.exports = highestProduct;
