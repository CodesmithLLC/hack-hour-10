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
  if (!target) return true; // you've hit the target, it's zerod out
  if (!array.length) return false;  //the array is empty. oh no
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(0), target)
  //the magic. left side bottoms out first, it subtracts the first ele from target and tries again with target changed,
  //the right side tries again with target intact. this recursive branching tries all combinations via || short circuiting
}

module.exports = subsetSum;
