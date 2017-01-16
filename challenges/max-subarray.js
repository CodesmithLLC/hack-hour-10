/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr, on = false, sum = 0) {
  return !arr.length
    ? sum
    : arr.length === 1 && !on
      ? arr[0]
      : on
        ? Math.max(sum, maxSubarray(arr.slice(1), true, sum + arr[0]))
        : Math.max(maxSubarray(arr.slice(1), false, sum), maxSubarray(arr.slice(1), true, sum + arr[0]))
}

module.exports = maxSubarray;
