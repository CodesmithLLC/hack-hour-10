/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log('sum', arr[i], arr[j]);
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

console.log(twoSum([1, 2], 5));
console.log(twoSum([1, 2], 1));
console.log(twoSum([1, 2], 3));
console.log(twoSum([0, 3], 3));

module.exports = twoSum;
