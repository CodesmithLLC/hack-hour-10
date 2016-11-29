/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let currArr = arr;
  while (currArr.length) {
    let index = Math.floor(currArr.length / 2);
    console.log(`Pulled ${currArr[index]} out for examination.`);
    if (currArr[index] === target) return true;
    if (target < currArr[index]) {
      console.log('Target is less than current Index, grabbing front half.');
      currArr = currArr.slice(0, index);
    } else currArr = currArr.slice(index + 1, currArr.length);
  }
  console.log('Got to the end, never saw target');
  return false;
}


module.exports = findInOrderedSet;

// Testing follows

// var nums = [1, 4, 6, 7, 9, 10, 11, 12, 13, 14, 17, 45, 99, 1024];
// console.log('Return:' , findInOrderedSet(nums, 14));
// console.log('Return:' , findInOrderedSet(nums, 99));
