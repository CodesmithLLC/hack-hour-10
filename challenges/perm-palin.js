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

//convert the string to a letter
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

//Make sure there is an even number of each letter. If one letter appears one time, it is still a valid palindrome. 
  let oneCount = 0;
  for (let key in letterObj) {
    if (letterObj[key] % 2 != 0) {
      if (letterObj[key] == 1 && oneCount === 0) {
        oneCount++;
      } else {
        return false;
      }
    }
  }

  return true;
}

module.exports = permPalin;
