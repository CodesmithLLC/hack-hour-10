// Write a function "countTwos" that takes a number as an argument, n. 
// The function will return the number of 2s encountered when counting 
// from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let numArr = num.toString().split('').reverse();
  let count = 0;
  for( let i = 0; i < numArr.length; i++ ) {
    if( numArr[i] >= 3 ) {
      count += Math.pow(10, i);
    }
    if( numArr[i] == 2 ) {
      let numStr = '';
      for( let j = i - 1; j >= 0; j-- ) {
        numStr += numArr[j];
      }
      count += Number(numStr) + 1;
    }
    count += numArr[i] * Math.pow(10, (i - 1)) * i;
  }
  return count;
}

function countTwo(num) {
  let count = 0;
  for( let i = 2; i <= num; i++) {
    let str = i.toString();
    for( let j = 0; j < str.length; j++ ) {
      if( str[j] === '2') {
        count++;
      }
    }
  }
  return count;
}

module.exports = countTwos;