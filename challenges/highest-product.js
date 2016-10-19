/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  var highest = 0;
  function findHigh(arr, count, high) {
    if(count === 3) {
      highest = high > highest || highest === 0 ? high: highest;
      return false;
    }
    if(arr[0] === undefined) {
      return false;
    }
    return findHigh(arr.slice(1), count, high) || findHigh(arr.slice(1), count + 1, arr[0] * high);
  }
  findHigh(array, 0, 1);
  return highest;
}

module.exports = highestProduct;
