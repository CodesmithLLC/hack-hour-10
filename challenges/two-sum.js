/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.constructor !== Array) return false;
  if (arr.length < 2) return false;
  const hashTable = {};
  for (let i = 0; i < arr.length; i += 1) {
    const sumMinusEl = n - arr[i];
    if (hashTable[sumMinusEl] !== undefined) return true;
    hashTable[arr[i]] = arr[i];
  }
  return false;
}

twoSum([1,5,4,2],9);
module.exports = twoSum;
