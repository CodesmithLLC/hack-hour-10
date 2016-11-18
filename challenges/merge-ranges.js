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
  // Sort by start times
  const sorted = array.sort((a, b) => a[0] - b[0]);

  // Remove start
  const firstTimeSlot = sorted.shift();

  // If current time slot ends earlier than previous time slot, ignore and move on.
  // If current start time is greater than last end time, create new time slot.
  // Otherwise, combine times by overwriting last end time with new end time.
  return sorted.reduce((acc, curr) => {
    const previousEndTime = acc[acc.length - 1][1];
    if (previousEndTime > curr[1]) return acc;
    curr[0] > previousEndTime ? acc.push(curr) : acc[acc.length - 1][1] = curr[1];
    return acc;
  }, [firstTimeSlot]);
}

// var times1 = [[2, 8], [3, 7]];
// var times2 = [[0, 1], [3, 9], [4, 8], [10, 12], [9, 10]];
// console.log(mergeRanges(times1));
// console.log(mergeRanges(times2));

module.exports = mergeRanges;
