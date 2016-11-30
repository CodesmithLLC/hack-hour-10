/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // console.log(`curr arr ${arr}`);
  let middleIndex = Math.floor(arr.length/2);
  // console.log(`middle index: ${middleIndex}    ${arr[middleIndex]}`);
  if(arr[middleIndex] === target){
    // console.log('found');
    return true;
  }else if(arr.length === 1){
    // console.log('not found');
    return false;
  }
  if(target < arr[middleIndex]){
    // console.log(`recurse ${arr.slice(0,middleIndex)}`)
    return findInOrderedSet(arr.slice(0,middleIndex), target);
  }else{
    // console.log(`recurse ${arr.slice(middleIndex+1)}`)
    return findInOrderedSet(arr.slice(middleIndex+1), target);
  }
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, -10));
// console.log(findInOrderedSet(nums, 2));
module.exports = findInOrderedSet;
