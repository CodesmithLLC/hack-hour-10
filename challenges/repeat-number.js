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

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : 1;
}

function repeatNumbers(array) {
  let max = -Infinity;
  const product = array.reduce((accum, curr) => {
    if (curr > max) max = curr;
    return accum * curr;
  })
  return product / factorial(max);
}

module.exports = repeatNumbers;
