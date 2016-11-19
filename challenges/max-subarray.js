/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
// 1 -2 3 
// 1 1
// -1 
// 2 1 3

function maxSubarray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSum + arr[i]) currentSum = arr[i];
    else if (currentSum + arr[i] > currentSum) currentSum += arr[i];
    else if (currentSum + arr[i] < currentSum) {
      if (currentSum + arr[i] > arr[i]) currentSum += arr[i];
      else currentSum = arr[i];
    }
    if (currentSum > maxSum) maxSum = currentSum;
  }
  return maxSum;
}

module.exports = maxSubarray;
