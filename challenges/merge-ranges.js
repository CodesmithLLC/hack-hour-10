/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  let ranges = [];
  for (let i = 0; i < array.length; i++) {
    if (ranges.length === 0) {
      ranges[0] = array[i];
    }
    else {
      for (let j in ranges) {
        if (array[i][0] > ranges[j][0] && array[i][0] < ranges[j][1] && array[i][1] > ranges[j][1]) {
          ranges[j][1] = array[i][1];
        }
        else if (array[i][1] > ranges[j][0] && array[i][1] < ranges[j][1] && array[i][0] < ranges[j][0]) {
          ranges[j][0] = array[i][0];
        }
        else ranges[ranges.length] = array[i];
      }
    }
  }
  return ranges;
}

module.exports = mergeRanges;
