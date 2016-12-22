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

'use strict';

function mergeRanges(array) {
  return array
    .sort((a, b) => Math.min(a[0], a[1]) - Math.min(b[0], b[1]))
    .reduce((results, cur, ind) => {
      if (ind === 0 || results[results.length - 1][1] < cur[0]) { 
        return results.concat([cur]); 
      } else {
        results[results.length - 1][1] = cur[1];
        return results;
      }
    }, []);
}

module.exports = mergeRanges;
