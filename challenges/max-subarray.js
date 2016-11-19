/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = -Infinity;
  let sum;
  
  function maxCheck(num) {
    if (num > max) max = num;
  }
  
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    maxCheck(sum);
    for (let k = i + 1; k < arr.length; k++) {
      sum += arr[k];
      maxCheck(sum);
    }
  }
  return max;
}

module.exports = maxSubarray;
