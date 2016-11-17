/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
if (array.constructor !== Array) {
  throw new Error('Input must be an array.');
}

let sortedArr = array.sort((arr1, arr2) => {
  return arr1[0] - arr2[0];
})
let temp = [];

for (let i = 0; i < sortedArr.length - 1; i++) {
  if (sortedArr[i][1] >= sortedArr[i + 1][0]) {
    temp.push(sortedArr[i][0]);
    temp.push(sortedArr[i + 1][1]);
    sortedArr.splice(i, 2);
    sortedArr.splice(i, 0, temp);
    temp = [];
    i--;
  }
}
return sortedArr;
}


module.exports = mergeRanges;
