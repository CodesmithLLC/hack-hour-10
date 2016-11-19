/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
}

function maxSubarray(arr) {
  const sums = [];
  for (let subArrLength = arr.length; subArrLength > 0; subArrLength--) {
    for (let subArrStartIndex = 0; subArrStartIndex <= arr.length - subArrLength; subArrStartIndex++) {
      const subArr = arr.slice(subArrStartIndex, subArrStartIndex + subArrLength);
      // console.log(subArr);
      const sum = subArr.sum();
      // console.log('CHECKING SubArr: ', subArr, "WITH sum: ", sum);
      sums.push(sum);
    }
  }
  // console.log('Sums: ', sums);
  return Math.max(...sums);
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
module.exports = maxSubarray;
