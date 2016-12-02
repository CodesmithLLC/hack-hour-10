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

// const arr1 = [1, 2, 3, 2, 1];
// const arr2 = [1, 2, 1, 3, 3];
// const arr3 = [0, 15, 7, 0, 7, 6, 6];
// const arr4 = [3];
// const arr5 = [1, 3, 3];

// console.log(uniqueNumber(arr1)); // 3
// console.log(uniqueNumber(arr2)); // 2
// console.log(uniqueNumber(arr3)); // 15
// console.log(uniqueNumber(arr4)); // 3
// console.log(uniqueNumber(arr5)); // 1

module.exports = uniqueNumber;
