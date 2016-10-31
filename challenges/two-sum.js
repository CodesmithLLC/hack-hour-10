/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  function find(num, array, count) {
    if(num === n && count === 2) return true;
    if(array[0] === undefined || count > 1) return false;
    return find(num + array[0], array.slice(1), count + 1) || find(num, array.slice(1), count);
  }
  return find(0, arr, 0);
}

module.exports = twoSum;
