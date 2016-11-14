/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
<<<<<<< HEAD
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
=======
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
>>>>>>> 124383488a9afbdcfc751399f0edaab82ddd1178
 *
 */

function mergeArrays(arr1, arr2) {
<<<<<<< HEAD
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return [];
  if (!Array.isArray(arr1) || !arr1.length) return arr2;
  if (!Array.isArray(arr2) || !arr2.length) return arr1;
  let result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else result.push(arr2.shift());
  }
  return result.concat(arr1).concat(arr2);
}

module.exports = mergeArrays;

var my_array;
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array));
=======

}

module.exports = mergeArrays;
>>>>>>> 124383488a9afbdcfc751399f0edaab82ddd1178
