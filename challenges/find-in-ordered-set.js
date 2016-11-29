/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let L = 0;
  let R = arr.length - 1;
  let m = Math.floor((L + R) / 2);
  
  if (target < arr[0] || target > arr[arr.length - 1] || arr.length === 0) return false;

  function recurser(L, R, m) {
    if (L > R) return false;
    if (arr[m] < target) {
      L = m + 1;
      m = Math.floor((L + R) / 2);
      return recurser(L, R, m);
    }
    if (arr[m] > target) {
      R = m - 1;
      m = Math.floor((L + R) / 2);
      return recurser(L, R, m);
    }
    if (arr[m] === target) return true;
  }
  
  return recurser(L,R,m);
}

module.exports = findInOrderedSet;
