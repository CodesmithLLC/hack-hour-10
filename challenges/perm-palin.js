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
  if (str === null || str === undefined) return str;
	if (str.length == 1) return true;
  if (str.length === str.split('').reverse().join('')) return true;
  var counter = {};
  for (var i = 0; i < str.length; i++) {
      
    if(counter[str[i]] === undefined) {
      counter[str[i]] = 1;
    }
    else ++counter[str[i]];
  }
  var countSingles = 0;
  for (var keys in counter) { 
    if (counter[keys] === 1)++countSingles;
  }
  return countSingles <= 1 ? true : false;
}

module.exports = permPalin;

