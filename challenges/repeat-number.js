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
// O(n) time, O(n) space
function repeatNumbers(array) {
  countObj = {};
  for (let i = 0; i < array.length; i++) {
    if (countObj[array[i]]) return array[i];
    countObj[array[i]] = true;
  }
  return false;
}
// console.log(repeatNumbers([1, 2, 2, 3, 4, 5]));
// console.log(repeatNumbers([1, 2, 3, 3, 4, 5]));
// console.log(repeatNumbers([1, 2, 3, 4, 4, 5]));
module.exports = repeatNumbers;
