/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// Values and indices cancel each other except for repeated number
const repeatNumbers = array => array.reduce((sum, n, i) => sum + n - i);

// function repeatNumbers(array) {
//   const repeatSum = array.reduce((total, curr) => total += curr);

//   let sum = 0;

//   for (let i = 1; i < array.length; i++) {
//     sum += i;
//   }

//   return repeatSum - sum;
// }

// const arr = [1, 2, 3, 4, 5, 10, 9, 8, 4, 7, 6]
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
