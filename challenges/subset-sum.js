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
  let smaller = [];
  let larger = [];
  let sum = target;

  function hasNeg(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) return true;
      return false;
    }
  }

  function recurse(start) {
    if (start === smaller.length) return false

    for (let i = start; i < smaller.length; i++) {
      sum -= smaller[i];
      if (sum === 0) return true;
    }
    sum = target;
    return recurse(start + 1);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < target) smaller.push(array[i]);
    else larger.push(array[i]);
  }

  if (array.includes(target) || array.reduce((a, b) => a + b, target) === target * 2) return true;
  if (larger.length > 0 && !hasNeg(smaller)) {
    return recurse(0);
  }

  console.log('smaller stash: ', smaller);
  console.log('larger stash:', larger);
}


// test cases
subsetSum([3, 7, 4, 2], 5) // - > true, 3 + 2 = 5
subsetSum([3, 34, 4, 12, 5, 12], 32) // -> true, 3 + 12 + 5 + 12 = 32
subsetSum([8, 2, 4, 12], 13) // -> false
subsetSum([8, -2, 1, -3], 6) // -> true, 8 + 1 + (-3) = 6

console.log(subsetSum([2, 3], 5));
console.log(subsetSum([3, 7, 4, 2], 5));

module.exports = subsetSum;
