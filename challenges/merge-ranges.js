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
  const newTimes = {};
  const sorted = array.sort((a, b) => a[0]-b[0]);
  array.forEach((range, index) => {
    let start = range[0];
    let end = range[1];
    for (let i = 0; i < array.length; i++) {
      if (array[i][1] >= end && array[i][0] <= end) end = array[i][1];
      if (array[i][1] >= start && array[i][0] <= start) start = array[i][0];
    }
    newTimes[`${start}, ${end}`] = [start, end];
  });
  const newTimesArray = [];
  for (let range in newTimes) newTimesArray.push(newTimes[range]);
  return newTimesArray;
}

module.exports = mergeRanges;
