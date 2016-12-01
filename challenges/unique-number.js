/**
 * Given an array of IDs, which contains many duplicate (there are two) integers and one unique integer,
 * find the unqiue integer.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  if (array.constructor !== Array) { throw new Error('Input must be an array.'); }
  return array.reduce((p, c) => p ^ c);
}

module.exports = uniqueNumber;

// Solution #1: O(n) time and O(n) space

// function uniqueNumber(array) {
//   if (array.constructor !== Array) { throw new Error('Input must be an array.'); }
//   const storage = {};
//   for (let i = 0; i < array.length; i++) {
//     storage[array[i]] ? delete storage[array[i]] : storage[array[i]] = true;
//   }
//   return Object.keys(storage)[0];
// }

// Solution #2: O(n^2) time? and O(1) space

// function uniqueNumber(array) {
//   if (array.constructor !== Array) { throw new Error('Input must be an array.'); }
//   let uniqVal = false;
//   array = array.sort((a, b) => a - b);

//   for (let i = 0; i < array.length; i++) {
//     if (!uniqVal) {
//       uniqVal = array[i];
//     }
//     else if (uniqVal === array[i]) {
//       uniqVal = false;
//     }
//   }
//   return uniqVal;
// }

// Solution #3: O(n) time and O(1) space

// function uniqueNumber(array) {
//   if (array.constructor !== Array) { throw new Error('Input must be an array.'); }
//   return array.reduce((p, c) => p ^ c);
// }
