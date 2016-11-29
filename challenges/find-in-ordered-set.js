/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  function bisectionSearch(start, end) {
    if (start === end) return (arr[start] === target)
    if (start > end) return false;
    const midpoint = Math.floor((end + start) / 2);
    if (arr[midpoint] === target) return true;
    else if (arr[midpoint] < target) return bisectionSearch(midpoint + 1, end);
    else return bisectionSearch(start, midpoint - 1);
  }
  return  bisectionSearch(0, arr.length - 1);
}

var nums = [1, 4, 6, 7, 9, 17, 45]

module.exports = findInOrderedSet;
