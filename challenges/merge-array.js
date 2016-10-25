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
  if (arr1 && !Array.isArray(arr2)) return arr1;
  if (arr2 && !Array.isArray(arr1)) return arr2;

  // Loop through each element in your array
  //  Add elements in the second array to another array up until
  //  that current element is greater than the element in your array
  //  --> avoid looping to all by exiting out early and keeping track
  //      of where you last ended

  const merged = [];

  let i_of_second = 0;
  arr1.forEach(val => {
    // Adding any elements less than or equal to current to the merged
    for (let i = i_of_second; i < arr2.length; i++) {
      if (arr2[i] <= val) {
        merged.push(arr2[i]);
        // We keep track of our position in the second array
        i_of_second++;
      }
      // We break out early to avoid looping through all of the second array
      else break;
    }
    // Finally adding your element
    merged.push(val);
  });

  // Takes care of the situation where the second array pre-maturely ends
  // when the last item of first array is less than one or more elements 
  // in the second array
  if (i_of_second < arr2.length) {
    for (let i = i_of_second; i < arr2.length; i++) {
      merged.push(arr2[i]);
    }
  }

  return merged;
}

module.exports = mergeArrays;
