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
  if(!str || str.length === 0) return false;
  let isOdd = str.length % 2 === 1;
  let trackerObj = {};
  str.split('').forEach( char => { trackerObj[char] = trackerObj[char] === undefined ? 1 : trackerObj[char] + 1; });
  let numberOddChars = 0;
  Object.keys(trackerObj).forEach( key => { if(trackerObj[key] % 2 === 1) numberOddChars++; });
  return isOdd ? numberOddChars === 1 : numberOddChars === 0;
}

module.exports = permPalin;