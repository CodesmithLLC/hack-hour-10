/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
 */

function findInOrderedSet(arr, target) {
  function splitter(array) {
    const middle = Math.floor(array.length / 2);
    let newArr;

    if (array.length === 1) return array[0] === target;
    else if (target < array[middle]) newArr = array.slice(0, middle);
    else if (target >= array[middle]) newArr = array.slice(middle, arr.length);

    return splitter(newArr);
  }
  
  return splitter(arr);
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// const nums2 = [1];
// const nums3 = [0, 4];
// const nums4 = [7, 8, 9, 10];
// console.log(findInOrderedSet(nums, 4));//  -> true
// console.log(findInOrderedSet(nums, 2));// -> false
// console.log(findInOrderedSet(nums2, 1));//  -> true
// console.log(findInOrderedSet(nums2, 0));// -> false
// console.log(findInOrderedSet(nums3, 0));//  -> true
// console.log(findInOrderedSet(nums3, 2));// -> false
// console.log(findInOrderedSet(nums4, 7));//  -> true
// console.log(findInOrderedSet(nums4, 11));// -> false

module.exports = findInOrderedSet;
