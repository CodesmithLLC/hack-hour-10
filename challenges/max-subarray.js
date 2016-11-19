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
  if (arr.length === 1) return arr[0];
  let maxSum = arr[0];

  arr.reduce((accum, curr) => {
    if (accum < 0) accum = curr;
    else if (curr > 0) accum += curr;
    else if (curr < 0) {
      if (accum  > 0) accum += curr;
      else accum = curr;
    }
    if (accum > maxSum) maxSum = accum;
    return accum;
  })
  return maxSum;
}

module.exports = maxSubarray;
