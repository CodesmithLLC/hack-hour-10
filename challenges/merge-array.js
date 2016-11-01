'use strict'
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

// function mergeArrays(arr1, arr2) {
// 	if ( (arguments.length === 1) ) return arguments[0];
//     if ( arguments.length === 2 ){
//       if ((!Array.isArray(arguments[0]))&& (!Array.isArray(arguments[1]))) return "wrong input";
//       if (!Array.isArray(arguments[0])) return arguments[1];
//       if (!Array.isArray(arguments[1])) return arguments[0];
//     }

// 	return arr1.concat(arr2).sort( (a,b) => { return a - b; })
// }


function mergeArrays(arr1, arr2) {
	if ( (arguments.length === 1) ) return arguments[0];
    if ( arguments.length === 2 ){
      if ((!Array.isArray(arguments[0]))&& (!Array.isArray(arguments[1]))) return "wrong input";
      if (!Array.isArray(arguments[0])) return arguments[1];
      if (!Array.isArray(arguments[1])) return arguments[0];
    }

    let result = [], i = 0,  y = 0;

    while (arr1.length) {
        if (i < arr1.length && y < arr2.length) {
            if (arr1[i] < arr2[y]) {
                result.push(arr1[i]);
                i++;
            } else if (arr1[i] > arr2[y]) {
                result.push(arr2[y]);
                y++;
            } else {
                result.push(arr1[i], arr2[y]);
                i++;
                y++;
            }
        } else if (i < arr1.length) {
            result.push.apply(result, arr1.slice(i, arr1.length));
            break;
        } else if (y < arr2.length) {
            result.push.apply(result, arr2.slice(y, arr2.length));
            break;
        }
    }
    return result;
}

// var my_array = [3,4,6,10,11,12,15,21];
// var another_array = [1,5,8,12,14,19];

// console.log(mergeArrays(my_array, another_array));

// console.log(mergeArrays(my_array));

// console.log(mergeArrays(another_array, "string"));

// console.log(mergeArrays("string2", "string"));



module.exports = mergeArrays;
