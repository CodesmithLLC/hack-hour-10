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
  const results = [];
  let arr1Ind = 0;
  let arr2Ind = 0;
  
  while (arr1Ind < arr1.length && arr2Ind < arr2.length) {
  	(arr1[arr1Ind] <= arr2[arr2Ind]) ? results.push(arr1[arr1Ind++]) :
  	  results.push(arr2[arr2Ind++]);
  }
  
  while (arr1Ind < arr1.length) { results.push(arr1[arr1Ind++]); }
  
  while (arr2Ind < arr2.length) { results.push(arr2[arr2Ind++]); }
  
  return results;
}

module.exports = mergeArrays;
