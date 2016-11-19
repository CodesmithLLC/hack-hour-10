/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  console.log('original array: ', array);
  array = array.sort((a, b) => a[0] - b[0]);
  console.log('sorted array: ', array);
  console.log('-----------------');
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    console.log('current: ', curr);
    const last = result[result.length - 1];
    console.log('last: ', last);
    if (result.length > 0) {
      if (curr[0] <= last[1]) {
        if (curr[1] > last[1]) {
          last[1] = curr[1];
          console.log('new last: ', last);
        }
        continue; // loops back to get next array in 'array'
      }
    }
    result.push(curr);
    console.log('new array: ', result);
    console.log('-----------------');
  }
  return result;

  // // Thai solution
  // return array
  // .sort((a, b) => { return a[0] > b[0] })
  // .reduce((a, c, i, s) => { return a[a.length - 1][1] < c[0] ? a.concat([c]): a.slice(0,-1).concat([[a[a.length - 1][0], a[a.length - 1][1] < c[1] ? c[1] : a[a.length - 1][1]]]) }, [array[0]])
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(times));

module.exports = mergeRanges;
