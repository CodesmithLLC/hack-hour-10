/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  return !arr || !arr.length
    ? false
    : arr.length === 1
      ? arr[0] === target
      : target < arr[Math.floor(arr.length / 2)]
        ? findInOrderedSet(arr.slice(0, Math.floor(arr.length / 2)), target)
        : findInOrderedSet(arr.slice(Math.floor(arr.length / 2)), target);
}


module.exports = findInOrderedSet;
