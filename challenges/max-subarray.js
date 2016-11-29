/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  return arr.reduce((memo, num) => {
    let { sum, max } = memo;  // ES6 object destructuring
    sum += num;
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
    return { sum, max };  // ES6 object creation shorthand
  }, { max: -Infinity, sum: 0 }).max;  // returns an object with 2 values and takes the max value 
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); // -> 18 from [3, 10, -4, 7, 2]
// console.log(maxSubarray([-1, -2, -3, -10, -4, -7, -2, -5]));
// console.log(maxSubarray([15,20,-5,10])); // -> 40

// const makeArr = (n) => {
//   const arr = [];
//   let sign;
//   for (let i = 0; i < n; i++) {
//     sign = Math.random() > 0.5 ? -1 : 1;
//     arr.push(sign * Math.floor(Math.random() * n));
//   }
//   return arr;
// };

// const picoArr = makeArr(1000);
// console.log(maxSubarray(picoArr));

module.exports = maxSubarray;
