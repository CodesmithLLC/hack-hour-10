/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  function tS(arr, n, count) {
    if (count > 2) return false;
    if (arr[0] === n) return true;
    if (!arr.length) return false;
    return tS(arr.slice(1), n, count) || tS(arr.slice(1), n - arr[0], count+1);
  }
  return tS(arr, n, 0);
}

module.exports = twoSum;
