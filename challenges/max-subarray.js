/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    results.push(sum);
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      results.push(sum);
    }
    sum = 0;
  }
  // console.log(results);
  return Math.max(...results);
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
