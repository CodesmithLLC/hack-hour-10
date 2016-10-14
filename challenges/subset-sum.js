/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) -> true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  // Validate input
  if (!Array.isArray(array)) return false;
  // check for only one item in array
  if (array.length === 1) return array[0] === target;
  // Generate a sum and check if it is the one we want
  const sum = array.reduce((a, b) => a + b);
  if (sum === target) return true;
  // if not, set up an array to store evaluations of recursive calls
  let possibleSums = [];
  // set up recursive calls for every sub-array of length (array.length - 1)
  for (let i = 0; i < array.length; i++) {
    possibleSums.push(subsetSum(array.slice(0, i).concat(array.slice(i + 1, array.length)), target));
  }
  // console.log(possibleSums);
  // check if any of those calls returned true, and return the result
  return possibleSums.some(item => item === true);
}

module.exports = subsetSum;
