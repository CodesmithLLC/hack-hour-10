/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  if ((!arr1 && !arr2) || !Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
  if (!arr1) return arr2;
  if (!arr2) return arr1;

  let result = [];

  // Track current value for each array
  let indexA = 0;
  let indexB = 0;

  // Loop until reach end of either array
  while (indexA < arr1.length && indexB < arr2.length) {

    // Compare current values. Push smaller value and increment index for pushed value's array.
    if (arr1[indexA] < arr2[indexB]) result.push(arr1[indexA++]);
    else result.push(arr2[indexB++]);
  }

  // Add tail 
  return result = arr1[indexA] ? result.concat(arr1.slice(indexA, arr1.length)) : result.concat(arr2.slice(indexB, arr2.length));
}

// const my_array = [-11, -2, 0,3,3,3,4,6,10,11,15,21, 22];
// const another_array = [1, 3, 3, 5, 8, 12, 14, 19, 25, 1000, 10000, 100000, 1000001, Infinity];
const arr1 = [0, 1, 2];
const arr2 = [0, 1, 2];
// console.log(mergeArrays(my_array, another_array));
console.log(mergeArrays(arr1, arr2));

module.exports = mergeArrays;
