/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let checkArr = [];
  for (let i = 0; i < str.length; i++) {
      let str1 = str[i] + str.slice(0, i) + str.slice(i+1);
      for (let j = 0; j < str1.length; j++) {
        let str2 = str1[j] + str1.slice(0, j) + str1.slice(j+1);
        checkArr.push(str2);
      }
  }
  // console.log(checkArr);
  for (let i = 0; i < checkArr.length; i++) {
    if (checkArr[i]  === checkArr[i].split('').reverse().join('')) return true;
  }
  return false;
}

// console.log(permPalin('cars'));// => 
// console.log(permPalin('abab'));// => true
// console.log(permPalin('cbaba'));// => true
// console.log(permPalin('cbac'));// => false
// console.log(permPalin('a'));// => true
// console.log(permPalin('odododododo'));// => 
 
module.exports = permPalin;