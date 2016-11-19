/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

  // Track largest sum
  let largestSum = -Infinity;

  // Helper function to add all values in subarrays during loops
  const sum = array => array.reduce((sum, val) => sum + val);
  
  // Helper function to check if current subarray has largest sum
  const largestSumCheck = array => {
    const total = sum(array);
    if (total > largestSum) largestSum = total;
  }

  // Loop through all possible subarrays comparing sums
  for (let i = 0; i < arr.length; i++) {
    const subarrays = [];

    for (let j = i; j < arr.length; j++) {
      subarrays.push(arr[j]);
      largestSumCheck(subarrays);
    }
  }

  return largestSum;
}

// const arr1 = [1, -2, 3, 10, -4, 7, 2, -5];
// const arr2 = [15, 20, -5, 10];
// const arr3 = [5];

// console.log(maxSubarray(arr1));
// console.log(maxSubarray(arr2));
// console.log(maxSubarray(arr3));

module.exports = maxSubarray;
