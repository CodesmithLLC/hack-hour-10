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

//convert the string to an array
  let strArr = str.split('');
  let letterObj = {};

//build a letter object to track the number of letters of each character
  for (let i = 0; i < strArr.length; i++) {
    if (letterObj[strArr[i]] != undefined) {
      letterObj[strArr[i]]++;
    } else {
      letterObj[strArr[i]] = 1;
    }
  }

//Make sure there is an even number of each letter. If one letter appears an odd number of times, the word is still a valid palindrome.
  let oddCount = 0;
  for (let key in letterObj) {
    if (letterObj[key] % 2 != 0) {
      if (oddCount === 0) {
        oddCount++;
      } else {
        return false;
      }
    }
  }

  return true;
}

module.exports = permPalin;
