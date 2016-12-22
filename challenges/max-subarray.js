/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  var highest = -Infinity;
  function find(array, count) {
    if(array[0] === undefined || count > array.length) return false;
    highest = array.slice(0, count).reduce((acc, cur) => acc + cur) > highest ? array.slice(0, count).reduce((acc, cur) => acc + cur) : highest;
    return find(array.slice(1), count) || find(array, count + 1);
  }
  find(arr, 1);
  return highest;
}

// var myArray = [15, 20, -5, 10];

// console.log(maxSubarray(myArray));

module.exports = maxSubarray;
