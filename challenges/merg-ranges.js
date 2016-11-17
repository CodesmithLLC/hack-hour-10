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
  const sorted = array.sort((a, b) => a[0] - b[0]);
  return sorted.reduce((prev, next) => {
    if (prev[prev.length - 1][1] >= next[0]) {
      prev[prev.length - 1] = [prev[prev.length - 1][0], (prev[prev.length - 1][1] >= next[1]) ? prev[prev.length - 1][1] : next[1]]
    }
    else {
      prev.push(next);
      return prev;
    }
  }, [sorted[0]])
}






module.exports = mergeRanges;