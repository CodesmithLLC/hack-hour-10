/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // BST => O(log(n))
  if (arr.length < 1) return false;
  
  const middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) return true;
  if (arr[middle] > target) return findInOrderedSet(arr.slice(0, middle), target);
  else return findInOrderedSet(arr.slice(middle + 1), target);
}

module.exports = findInOrderedSet;
