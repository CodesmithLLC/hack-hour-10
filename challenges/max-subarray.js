/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

  let storage = [];
  let numsToSum = 1;

  let all = arr.reduce((a,b) => a + b);
  storage.push(all);

  while (numsToSum < arr.length) {
    for (let i = 0; i < arr.length - numsToSum + 1; i++) {
      let sum = 0;
      let numCounter = numsToSum;
      let start = i;
    while (numCounter > 0) {
      sum += arr[start];
      start++;
      numCounter--;
    }
    storage.push(sum);
  }
  numsToSum++;
}

  return Math.max(...storage);
}


module.exports = maxSubarray;
