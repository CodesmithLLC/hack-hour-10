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

  let start = 0;

  while (arr2.length != 0 && start < arr1.length) {
    let num = arr2.shift();

    for (let i = start; i < arr1.length; i++) {
      if (num < arr1[start]) {
        arr1.splice(start, 0, num);
        start++
        break;
      } else {
        start++;
      }
    }
  }

  return arr1;

}

module.exports = mergeArrays;
