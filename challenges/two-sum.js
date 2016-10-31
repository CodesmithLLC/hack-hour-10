/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false;

  // for (let i = 0; i < arr.length - 1; i++){
  //   for (let j = i + 1; j < arr.length; j++){
  //     if (arr[i] + arr[j] === n) return true;
  //   }
  // }
  // return false;
  let last = arr.pop();
  for (let i = 0; i < arr.length; i++) {
    let total = arr[i] + last;
    if (total === n) return true;
  }
  return twoSum(arr, n);
}

module.exports = twoSum;
