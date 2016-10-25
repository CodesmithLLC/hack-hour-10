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
  if (!arr1) return arr2;
  if (!arr2) return arr1;
  if (!arr1 && !arr2) return [];

  let output = [];
  let length = arr1.length + arr2.length;
  let a = 0, b = 0;

  while (arr1[a] || arr2[b]) {
    if (arr1[a] < arr2[b] || !arr2[b]) {
      output.push(arr1[a]);
      a++;
    } else if (arr1[a] > arr2[b] || !arr2[a]) {
      output.push(arr2[b]);
      b++;
    }

  }

  return output;
}

module.exports = mergeArrays;
