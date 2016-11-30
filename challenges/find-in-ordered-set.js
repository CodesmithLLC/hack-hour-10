/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// REFACTOR

function findInOrderedSet(arr, target) {

  let HOLD_MID,
    upper = arr.length-1,
    lower = 0;

  function recurse(midpoint) {
    let newMid;

    if (target === arr[midpoint]) return true;
    if (midpoint === HOLD_MID) return false;
    
    HOLD_MID = midpoint;
    
    if (target < arr[midpoint]) {
      newMid = Math.floor((midpoint - lower) / 2);
      upper = midpoint;
      return recurse(newMid);
    }
    if (target > arr[midpoint]) {
      newMid = Math.floor((upper - midpoint) / 2);
      lower = midpoint;
      return recurse(newMid);
    }
  }

  return recurse(Math.floor(arr.length / 2));
}



module.exports = findInOrderedSet;
