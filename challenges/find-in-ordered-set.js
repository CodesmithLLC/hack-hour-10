/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


 function findInOrderedSet(arr, target) {
    if (arr[0] > target || arr[arr.length - 1] < target) return false;
    if (arr[0] === target || arr[arr.length - 1] === target) return true; 
   let middle = arr.length / 2;
   if (middle % 2 !== 0) middle = Math.floor(middle);
   if (arr[middle] === target) return true;
   if (arr.length <= 2){
     if (arr[middle] === target){
       return true;
     }
     if (arr[middle - 1] === target) return true;
     return false;
   }
   if (arr.length % 2 !== 0) middle = Math.floor(middle);
   if (target < arr[middle]) arr = arr.slice(1, middle);
   if (target > arr[middle]) arr = arr.slice(middle + 1);
   findInOrderedSet(arr, target);
 }

module.exports = findInOrderedSet;
