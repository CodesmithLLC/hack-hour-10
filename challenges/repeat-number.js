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

function repeatNumbers(array) {
  const cache = {};

  for (let i = 0; i < array.length; i++) {
    if (!cache[array[i]]) {
      cache[array[i]] = array[i];
    }
    else return cache[array[i]];
  }
}

console.log(repeatNumbers([1,2,3,4,5,7,8,9,10,9]));

module.exports = repeatNumbers;
