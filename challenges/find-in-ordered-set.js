/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  function finder(array) { 
    var half = Math.floor(array.length / 2);
    if (array.length === 1) return array[0] === target;
    else if (array[half] > target) return finder(array.slice(0, half))
    else return finder(array.slice(half));
  }
  if(arr[arr.length - 1] < target) return false
  if(arr[0] > target) return false 
  return finder(arr);
}

module.exports = findInOrderedSet;
