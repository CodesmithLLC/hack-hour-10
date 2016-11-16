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
  let obj = {};
  let ans = "No repeating numbers"
  array.forEach((num) => {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      ans = num
    }
  });
  return ans;
}

module.exports = repeatNumbers;