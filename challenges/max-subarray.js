/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const permutations = [];
  let max = undefined;
  for (let i = 0; i < arr.length; i++) {
    const iVal = arr[i];
    for (let j = arr.length; j > i; j--) {
      const tempArr = [iVal];
      for (let k = i + 1; k < j; k++) {
        const kVal = arr[k];
        tempArr.push(kVal);
      }
      permutations.push(tempArr);
      const sum = tempArr.reduce(function (prev, current) {
        return prev + current;
      }, 0);
      if (max === undefined || sum > max) {
        max = sum;
      }
    }
  }
  return max;

}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([15, 20, -5, 10]));

module.exports = maxSubarray;