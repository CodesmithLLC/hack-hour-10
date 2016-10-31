/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let sum;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      sum = 0;
      sum = arr[i] + arr[j];
      console.log(sum);
      if (sum === n) return true;
    }
  }
  return false;

}

const arr1 = [1, 2, 3, 4, 5, 7, 8, 9, 10]
console.log(twoSum(arr1, 10));  // true

module.exports = twoSum;
