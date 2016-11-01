
/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let i = 0;
  while (i <= arr.length) {
    for (let j = 1; j < arr.length; j++) {
      if (n - arr[j] === arr[i]) {
        return true;
      }
    }
    i++;
  }
  return false;
}

module.exports = twoSum;