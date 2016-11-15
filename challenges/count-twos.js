// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// function countTwos(num) {
//   let count = 0;
//   if (num < 2) return 0;
//   for (let i = 2; i <= num; i++) {
//     let str = i.toString();
//     for (let j = 0; j < str.length; j++) {
//       if (str[j] === '2') count++;
//     }
//   }
//   return count;
// }


//  FUNCTIONAL VERSION
function countTwos(num) {
  return Array.from( { length: num + 1 }, (el, index) => index)
    .reduce((a, b) => a.toString() + b.toString())
    .split('')
    .filter(el => el === '2').length;
}

// console.log(countTwos(1));//  -> 0
// console.log(countTwos(3));//  -> 1
// console.log(countTwos(13));//  -> 2
// console.log(countTwos(1000));//  -> 300
// console.log(countTwos(11420));//  -> 4483

module.exports = countTwos;