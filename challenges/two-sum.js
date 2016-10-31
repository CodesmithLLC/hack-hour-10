/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
if (!Array.isArray(arr)) { return false; }
if (arr.length < 2) { return false; }
let target = n;

for (let i = 0; i < arr.length; i++) {
  if (arr.includes(target - arr[i]) && arr.lastIndexOf(target - arr[i]) !== i) {
    return true;
  }
}
return false;
}

module.exports = twoSum;
