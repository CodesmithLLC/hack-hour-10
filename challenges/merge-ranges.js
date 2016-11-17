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
  array = array.sort((a,b) => {return a[0] - b[0];});
  return array.reduce((acc, curr, idx) => {
    let accLast = acc[acc.length-1];
    // console.log(idx);
    // console.log(`acc: ${acc.length} :: ${acc}`);
    // console.log(acc);
    // console.log(`curr ${curr}`);
    if(acc.length === 0 || curr[0] > accLast[1]){ // push case curr range > accLast range
      // console.log(`first: ${[...acc, curr]}`)
      return [...acc, curr]
    }else if(curr[0] <= accLast[1]){ // curr range inclusively within accLast range || curr[1] > accLast[1]
      accLast[1] = Math.max(curr[1], accLast[1]);
      // console.log(`second: ${acc}`);
      return acc;
    }
    // should not reach this point because curr[0] > accLast[1] and curr[0] <= accLast[1] are compliments
  }, []);
}

module.exports = mergeRanges;
