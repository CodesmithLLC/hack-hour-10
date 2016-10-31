/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let without = arr.slice();
    without.splice(i, 1);

    for (let j = 0; j < without.length; j++) {
      if (arr[i] + without[j] === n) {
        return true;
      }
    }
  }
  return false;
}


module.exports = twoSum;
