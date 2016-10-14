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
  // This algorithm is slow but to get this out,
  // we can start at the first number and keep on adding to each of the elements
  // until it is found, or it reached something greater than the target. We
  // will do this until all the possibilities are checked for each number...

  let found = false;

  const sol = array.reduce((prev, cur) => {
      if (prev === target) return true;
      if (prev > target) return false;
      return prev + cur; 
  });

  if (sol) found = true;

  return found;
}

module.exports = subsetSum;
