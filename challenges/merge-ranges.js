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

  let upper = [];
  let mergable = [];
  let unmergable = [];

  for (let i = 0; i < array.length; i++){
    upper.push(array[i][2]);
  }

  for (let i = 0; i < array.length; i++){
    for (var j = 0;j  < upper.length; j++) {
      if (upper[j] > array[i][0] && upper[j] < array[i][1]) mergable.push(array[i]);
      else unmergable.push(array[i]);
    }

  }
  console.log('mergable, ', mergable);
  console.log('unmergable, ', unmergable);
  console.log('upper, ', upper);
}

module.exports = mergeRanges;
