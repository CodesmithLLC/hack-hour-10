/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
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
  // handle bad input
  if (!Array.isArray(arr2) && Array.isArray(arr1)) return arr1;
  if (!Array.isArray(arr1) && Array.isArray(arr2)) return arr2;
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) throw new Error('You need to provide an array');

  // merge arrays
  let i = 0;
  let j = 0;
  const mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) mergedArray.push(arr1[i++]);
    else mergedArray.push(arr2[j++]);
  }
  return mergedArray.concat(i < arr1.length ? arr1.slice(i) : arr2.slice(j));
}


module.exports = mergeArrays;
