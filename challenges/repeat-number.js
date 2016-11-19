/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function xrepeatNumbers(array) {
  let i = 0;
  let runningSum = array.reduce((acc, curr) => {
    i++;
    return i === array.length - 1 ? acc : acc + i;
  }, 0);
  // console.log('========');
  // console.log(array);
  // console.log(array.length);
  // console.log(runningSum);
  // console.log('========');
  let totalSum = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
  // console.log(totalSum);
  return totalSum - runningSum + 1;
}

function repeatNumbers(array){
  return array.reduce((acc, curr, idx) => {
    return acc + (curr - idx);
  }, 0);
}

module.exports = repeatNumbers;
