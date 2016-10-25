/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = ;
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  let length = arr1.length > arr2.length ? arr2.length + 1 : arr1.length + 1;
  let result = [];
  let a1i = 0;
  let a2i = 0;
  while (arr1[a1i] && arr2[a2i]) {
    arr1[a1i] > arr2[a2i] ? (result.push(arr2[a2i]), a2i++) : (result.push(arr1[a1i]), a1i++);
  }
  if (arr1[a1i] === undefined) result.push(...arr2.splice(a2i, arr2.length));
  if (arr2[a2i] === undefined) result.push(...arr1.splice(a1i, arr1.length));
  return result;
}

module.exports = mergeArrays;
