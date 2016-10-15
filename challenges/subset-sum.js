/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
<<<<<<< HEAD
    let len = array.length;
    for(let i=0; i<len; i++){
        let sum = 0;
        for(let n = 0; n<len; n++){
            sum += array[n];
            if(sum === target) return true;
        }
        let shift = array.shift();
        array.push(shift);
    }
    return false;
=======

>>>>>>> 6472679f9e9b1e46a3eb30207938cd1a560f742c
}

module.exports = subsetSum;
