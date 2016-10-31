/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!n) return true;
  if (!arr.length) return false;
  return arr.reduce( (acc, ele) => {
    return arr.includes(n - ele) || acc;
  }, false);
}

module.exports = twoSum;
