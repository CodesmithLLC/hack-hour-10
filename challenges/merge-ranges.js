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
  return array.reduce((acc, cur, ind, arr) => {
    let flag = false;
    if (acc.length === 0) acc.push(cur);
    else acc = acc.map(ele => {
      let high = Math.max(cur[0], ele[0]);
      let low = Math.min(cur[0], ele[0]);
      let low2;
      low === cur[0] ? low2 = cur[1] : low2 = ele[1];
      if (low - high < 0 && low2 - high < 0) return ele;
      flag = true;
      let merge = ele.concat(cur).sort((a, b) => a - b);
      return [merge[0], merge[3]];
    });
    if (!flag) acc.push(cur);
    return acc;
  }, []);
}

module.exports = mergeRanges;
