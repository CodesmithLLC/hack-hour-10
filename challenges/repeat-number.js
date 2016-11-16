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
  // Simple error check but can't seem to find a good solution
  // for finding when there is no double!
  if (array.length < 2) return;

  // We can calc the sum of the array length minus 1 because
  // if there are no repeats, then we can use the infinite sum series
  // to get the sum

  // We need the sum of the actual array
  const sum = array.reduce((a, b) => a + b);

  // Sum of array with no repeat
  const len = array.length;

  const _len = array.length - 1;
  const _sum = (_len * len) / 2;

  // We can now subtract the difference 
  // to see what that repeated number is
  return sum - _sum;
}

function repeatNumbers2(array) {
  // Cache number as it goes through array
  // When the number is found again, then
  // store that double and return that
  let double;

  // Objects space complexity is O(n) because as we iterate through the array,
  // the memory space the object takes increases
  const cache = {};
  array.forEach(num => {
    if (!cache[num]) cache[num] = true;
    else double = num;
  });

  return double;
}

module.exports = repeatNumbers;
