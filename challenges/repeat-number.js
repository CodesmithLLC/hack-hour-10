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
  if (array.length === 0) return undefined;
  if (array.length === 1) return array[0];

  // let result = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (!result.includes(array[i])) result.push(array[i]);
  //   else return array[i];
  // }

  // FUNCTIONAL VERSION
  let result;
  let x = array.reduce((all, item) => {
    if (!all.includes(item)) all.push(item);
    else result = item;
    return all;
  }, []);
  return result;

}

console.log(repeatNumbers([1, -1, 2, -4, 0, -1]));

module.exports = repeatNumbers;
