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
  // Iterate through the array and check if it is mergeable
  // Something is mergeable when the first lower bound lies
  // between (inclusively) the lower and upperbound of a range
  return array.reduce((prev, cur) => {
    let [cur_x, cur_y] = cur;

    for (let i = 0; i < prev.length; i++) {
      if (cur_x >= prev[i][0] && cur_x <= prev[i][1]) {
        prev[i][1] = cur_y;
        return prev;
      }
      else if (prev[i][0] >= cur_x && prev[i][0] <= cur_y) {
        cur_y = prev[i][1];
        prev[i] = cur;
        return prev;
      }
    }

    prev.push(cur);
    return prev;
  }, []);
}

module.exports = mergeRanges;
