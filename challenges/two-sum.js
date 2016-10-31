/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const complement = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (complement[element]) return true;
    complement[n - element] = true;
  }
  return false;
}

module.exports = twoSum;
