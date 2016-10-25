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
  var array = [];
  var totallength = arr1.length + arr2.length; 
  console.log(totallength)
  for (var p = 0, i = 0, j = 0; p <= totallength; p++) {
    if(arr1[i] < arr2[j] && arr1[i] !== undefined) {
      array.push(arr1[i])
      i++
    }
    else if(arr2[j] !== undefined) {
      array.push(arr2[j]);
      j++
    }
  }
  if (arr1[i] !== undefined) {
    array = array.concat(arr1.slice(i))
  }
 
  return array;
}

module.exports = mergeArrays;


