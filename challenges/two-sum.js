/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === n && i !== j) return true;
    }
  }

  return false;
}

// const arr1 = [1, 4, 6, 9];
// const arr2 = [-3, -2, 9, 4];
// console.log(twoSum(arr1, 8));
// console.log(twoSum(arr2, 4));

module.exports = twoSum;
