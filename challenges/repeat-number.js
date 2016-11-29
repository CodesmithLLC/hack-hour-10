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
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    if (obj[elem] !== undefined) {
      return elem;
    }
    obj[elem] = true;
  }
}

const example = [1, 2, 3, 4, 2, 7];
console.log(repeatNumbers(example));

module.exports = repeatNumbers;