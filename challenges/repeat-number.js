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
  return array.reduce((acc, curr, ind) => { //due to zeroth index, adds +1 until it hits the doubled value, then stops adding
    return acc + (curr - ind);
  }, 0);
  // let a = Array.from(new Set(array));  //works for anything, including numberless array values
  // for (let i = 0; i < a.length; i++) {
  //   if (array[i] !== a[i]) return (array[i]);
  // }
}

module.exports = repeatNumbers;
