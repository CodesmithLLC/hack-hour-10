/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

  // return false if empty array
  if (array.length === 0) return false;
  if (array[0] === target) return true;
  // base case: array has only one element
  if (array.length === 1) return array[0] === target;
  
  // otherwise, take the first element in the array and check the subsets containing that element
  // if none of those work, check the subsets that do not contain that element
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);

}

// // console.log(subsetSum([3,7,4,2], 5))
// // console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
// // console.log(subsetSum([8, 2, 4, 12], 13))
// // console.log(subsetSum([8, -2, 1, -3], 6) )
// console.log(subsetSum([-3, 0, -3], -6)) // true
// console.log(subsetSum([-3, 0, 0], -3)) // true
// console.log(subsetSum([-3, 5, -3], -1)) // true
// console.log(subsetSum([5, 0, -3], 2)) // true
// console.log(subsetSum([-3, 5, -3], -6)) // true

// console.log(subsetSum([-3, 0, -5], -4)) // false
// console.log(subsetSum([-3, 0, 0], -2)) // false
// console.log(subsetSum([-3, 5, -3], 10)) // false
// console.log(subsetSum([5, 0, -3], 0)) // true
// console.log(subsetSum([-3, 5, -3], -20)) // false


// console.log(subsetSum([-3, 5, -3], -20)) // false

// console.log(subsetSum([5], 5))
// console.log(subsetSum([], 5))
module.exports = subsetSum;
