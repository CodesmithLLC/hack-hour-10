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
//     return !arr1 || !arr1.length
//         ? arr2
//         : !arr2 || !arr2.length
//             ? arr1
//             : arr1[0] <= arr2[0]
//                 ? [arr1[0]].concat(mergeArrays(arr1.slice(1), arr2))
//                 : [arr2[0]].concat(mergeArrays(arr1, arr2.slice(1)))
// }

function mergeArrays(arr1, arr2) {
    if (!arr2 || !arr2.length) return arr1;
    if (!arr1 || !arr1.length) return arr2;
    const min = Math.min(Math.min(...arr1), Math.min(...arr2));
    const max = Math.max(Math.max(...arr1), Math.max(...arr2));
    const pivot = (min + max) / 2;
    const small = [];
    const big = [];
    for (let i = 0, temp; i < arr1.length; i++)
        if (arr1[i] > pivot) big.push(arr1[i]);
        else small.push(arr1[i]);
    for (let i = 0, temp; i < arr2.length; i++)
        if (arr2[i] > pivot) big.push(arr2[i]);
        else small.push(arr2[i]);
    return mergeArrays(small.slice(0, Math.floor(small.length / 2)), small.slice(Math.floor(small.length / 2)))
        .concat(mergeArrays(big.slice(0, Math.floor(big.length / 2)), big.slice(Math.floor(big.length / 2))))
}

module.exports = mergeArrays;

