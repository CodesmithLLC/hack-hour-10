// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let numArr = num.toString().split("").reverse();
  let result = 0;
  if (num[0] >= 2) {
    result = 1
  }

  for (let i=1; i<numArr.length; i++) {
    if (numArr[i] >= 2) {
      result += (Math.pow(10, i-1) * i) + Math.pow(10, i-1);
    } else if (numArr[i] == 1) {
      result += (Math.pow(10, i-1) * i);
    }
  }
  return result;
}

module.exports = countTwos;

console.log(countTwos(1000));
