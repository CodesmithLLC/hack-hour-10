/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21]; length 7
 * var another_array = [1,5,8,12,14,19]; length 6
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
  const result = [];
  let il = 0;
  let ir = 0;

  while (il < arr1.length && ir < arr2.length) {
    if (arr1[il] < arr2[ir]) {
      result.push(arr1[il++]);
    } else {
      result.push(arr2[ir++]);
    }
  }
  
  return result.concat(arr1.slice(il)).concat(arr2.slice(ir));
}

const arr1 = [3, 4, 6, 10, 11, 15, 21];
const arr2 = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(arr1, arr2));//[1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;