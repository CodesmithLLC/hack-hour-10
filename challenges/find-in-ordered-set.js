/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// O(n/2)
function findInOrderedSet(arr, target) {
  const middle = Math.floor(arr.length / 2);
  let start = 0;
  let end = arr.length;
  if (arr[middle] > target) {
    end = middle;
  } else {
    start = middle;
  }
  for (let i = start; i < end; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// var nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4)); // -> true
// console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;