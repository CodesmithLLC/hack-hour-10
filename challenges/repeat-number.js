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
  // Cache number as it goes through array
  // When the number is found again, then
  // store that double and return that
  let double;

  const cache = {};
  array.forEach(num => {
    if (!cache[num]) cache[num] = true;
    else double = num;
  });

  return double;
}

module.exports = repeatNumbers;
