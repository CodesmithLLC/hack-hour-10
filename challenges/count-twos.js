// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num) {
  let numArray = num.toString().split('');
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    const magnitude = numArray.length - i - 1;
    const digit = numArray[i];
    if (digit < 2) sum += digit * magnitude * Math.floor(Math.pow(10, magnitude - 1));
    if (digit > 2) sum += digit * magnitude * Math.floor(Math.pow(10, magnitude - 1)) + Math.floor(Math.pow(10, magnitude));
    if (digit == 2) sum += digit * magnitude * Math.floor(Math.pow(10, magnitude - 1)) + (parseInt(numArray.slice(i + 1).join(''), 10) || 0) + 1;
  }
  return sum;
}
console.time('start');
console.log(countTwos(107653400376320956));
console.timeEnd('start');
module.exports = countTwos;