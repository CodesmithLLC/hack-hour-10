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
  var results = [];
  var ranges = array.sort( (a, b) => a[0] - b[0]);

  ranges.reduce( (acc, cur) => {
    if( results[0] === undefined || !(results[results.length - 1][0] === acc[0] && results[results.length - 1][1] === acc[1]) ) results.push(acc);
    if(acc[0] < cur[0] && acc[1] >= cur[0]) acc[1] = cur[1];
    else acc = cur;

    return acc;
  });
  return results;
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));

module.exports = mergeRanges;
