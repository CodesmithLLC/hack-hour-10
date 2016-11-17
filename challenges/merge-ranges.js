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
  const newArr = [];
  while (array.length > 0) {
    let temp = array.shift();
    for (let i = 0; i < array.length; i++) {
      if ((array[i][0] <= temp[1]) && (array[i][1] >= temp[0])) {
        let first = Math.min(array[i][0], temp[0]);
        let last = Math.max(array[i][1], temp[1]);
        array.splice(i,1);
        temp[0] = first;
        temp[1] = last;
      }
    }
    newArr.push(temp);
  }
  return newArr;
}

module.exports = mergeRanges;
