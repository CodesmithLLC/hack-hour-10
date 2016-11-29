/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let midItem;
  let midIndex;
  let clone = [...arr];
  
  while(clone.length) {
    midIndex = Math.floor(clone.length / 2)
    midItem = clone[midIndex];
    
    if (midItem === target) {
      return true;
    } else if (midItem > target) {
      clone = clone.slice(0, midIndex);
    } else {
      clone = clone.slice(midIndex + 1, clone.length);
    }
  }
  
  return false;
}


module.exports = findInOrderedSet;
