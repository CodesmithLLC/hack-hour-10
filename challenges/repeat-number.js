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
  let double;
  const table = array.reduce((freq, elem) => {
    (!freq[elem]) ? freq[elem] = 1 : freq[elem]++;
    if (freq[elem] === 2) double = elem;
    return freq;
  }, {});
  return double;
}

module.exports = repeatNumbers;
