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
  let sums = [];
  let found = false;
  let test = 0;

  for (let i = 0; i < array.length; i++) {
    sums.push(array[i]);
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) continue;
      if (test + array[j] <= target) {
        test += array[j];
        sums.push(test);
      }
    }
    test = 0;
  }

  // console.log(sums);
  sums.forEach(num => {
    if (num === target) found = true;
  });
  return found;
}
console.log(subsetSum([3, 7, 4, 2], 5));
 console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
console.log(subsetSum([8, 2, 4, 12], 13));
// console.log(subsetSum([8, -2, 1, -3], 6));
module.exports = subsetSum;
