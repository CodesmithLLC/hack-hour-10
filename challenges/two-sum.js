/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n, count = 2) {
    return !n && !count
        ? true
        : !arr || !arr.length
            ? false
            : !count
                ? false
                : twoSum(arr.slice(1), n - arr[0], count - 1) || twoSum(arr.slice(1), n, count);
}

module.exports = twoSum;
