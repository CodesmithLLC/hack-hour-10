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
  let newArr = array
    .reduce((all, item) => {
      counter = item[0]
      for (let i = 0; i <= (item[item.length - 1] - item[0]); i++) {
        all.push(counter + i);
      }
      return all;
    }, [])
    .sort((a, b) => a - b);

  let finalArr = [];
  let secondFinalArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (!finalArr.includes(newArr[i])) finalArr.push(newArr[i]);
  }
  for (let i = 0; i < finalArr.length; i++) {
    secondFinalArr.push(finalArr[i]);
    if (finalArr[i] + 1 !== finalArr[i + 1]) {
      secondFinalArr.push('x');
    }
  }
  
  console.log(secondFinalArr);

}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(times));

module.exports = mergeRanges;
