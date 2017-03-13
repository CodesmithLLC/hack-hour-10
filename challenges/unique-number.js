/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unique integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

// Binary XOR operator yields unique value (in decimal) after all bitwise differences are taken into account
const uniqueNumber = array => array.reduce((acc, cur) => acc ^ cur, 0);

console.log(uniqueNumber([1, 2, 3, 2, 1]));        // 3
console.log(uniqueNumber([1, 2, 1, 3, 3]));        // 2
console.log(uniqueNumber([0, 15, 7, 0, 7, 6, 6])); // 15
console.log(uniqueNumber([3]));                    // 3
console.log(uniqueNumber([1, 3, 3]));              // 1
console.log(uniqueNumber([0, 2, 2]));              // 0

module.exports = uniqueNumber;

// 1. What is bitwise XOR?
// 2. What about 0 since we're starting check against 0?

// FOR LOOP
// function uniqueNumber(array) {
//   // Initialize unique to zero
//   // Loop through array
//     // Reassign unique with bitwise XOR of unique and current element
//   // Return unique after bitwise XOR eliminates dupes
// }

// REDUCE
// function uniqueNumber(array) {

// }
