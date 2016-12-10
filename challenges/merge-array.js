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
  const newArr = [];
  while (arr1.length > 0) {
    if (arr1[0] > arr2[0]) {
      newArr.push(arr2.shift());
    } else {
      newArr.push(arr1.shift());
    }
  }
  arr2.forEach(function(val) {
    newArr.push(val)
  });

  return newArr;
}

// function mergeArrays(arr1, arr2) {
//   const totalLength = arr1.length + arr2.length;
//   let arr1Position = 0;
//   while (arr1.length === totalLength) {
//     if (arr1[arr1Position] > arr2[0]) {
//       arr1.splice(arr1Position, 0, arr2.shift());
//     } else {
//       arr1.splice(arr1Position - 1, 0, arr2.shift());
//     }
//   }
//   console.log(arr1);
//   // arr2.forEach(function(val) {
//   //   arr1.push(val)
//   // });

//   return arr1;
// }

//  var my_array = [3,4,6,10,11,15,21];
//  var another_array = [1,5,8,12,14,19];
 
//  console.log(mergeArrays(my_array, another_array)); //-> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
