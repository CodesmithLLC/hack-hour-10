/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // quick false if target out of range
  if (target < arr[0] || target > arr[arr.length-1]) return false;

  // base cases
  if (arr[0] === target) return true;
  if (arr.length === 1) return false;

  // divide and conquer
  let left = arr.slice(0, arr.length/2);
  let right = arr.slice(arr.length/2);
  const middle = right[0];
  if (target === middle) {
    return true;
  } else if (target < middle) {
    left = findInOrderedSet(left, target);
  } else { // target > middle
    right = findInOrderedSet(right.slice(1), target);
  }
  return left === true || right === true;
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false

module.exports = findInOrderedSet;
