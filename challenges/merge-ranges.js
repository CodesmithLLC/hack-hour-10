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

function clearDuplicates(array) {
  const freq = {};
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!freq[array[i]]) {
      newArray.push(array[i]);
      freq[array[i]] = 1;
    }
  }
  return newArray;
}

function mergeRanges(array) {
  const uniqArray = clearDuplicates(array);
  if (uniqArray.length === 1) return uniqArray;
  const timesToDelete = {};
  const sortedArray = uniqArray.slice().sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1];
  });
  return clearDuplicates(sortedArray.slice(0, sortedArray.length - 1)
    .map((times, index) => {
      if (times[1] >= sortedArray[index + 1][0]) {
        if (times[1] < sortedArray[index + 1][1]) times[1] =  sortedArray[index + 1][1];
        if (JSON.stringify(times) !== JSON.stringify(sortedArray[index + 1])) {
          timesToDelete[sortedArray[index + 1]] = true;
        }
      }
      return times;
    }))
    .filter(time => {
      return timesToDelete[time] === undefined;
    })
}

module.exports = mergeRanges;
