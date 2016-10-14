/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
"use strict"
function subsetSum(array, target) {
  let total = array.reduce((all, item) => {
    return all + item;
  });
  if (total === target) return true;
  
  
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    if (array[i] === target) return true;
    sum += array[i];
    if (sum === target) return true;

    for (let j = array.length - 1; j > 0; j--) {
      sum += sum[j];
      if (sum === target) return true;
    }
  }

  return false;
}

console.log(subsetSum([3, 7, 4, 2], 5));// - > true, 3 + 2 = 5
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));// -> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13));// -> false
// console.log(subsetSum([8, -2, 1, -3], 6));// -> true, 8 + 1 + (-3) = 6


module.exports = subsetSum;
