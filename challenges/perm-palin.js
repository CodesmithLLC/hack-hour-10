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
  let letters = {};
	for(let i = 0; i < str.length; i++) {
    letters[str[i]] = letters[str[i]] === undefined ? 1 : letters[str[i]] + 1;
  }
  let oddCount = 0;
  for(let letter in letters) {
    if(letters[letter] % 2 === 1) {
      oddCount++;
      if(oddCount > 1) return false;
    }
  }
  return true;
}

console.log(permPalin('cbac'));

module.exports = permPalin;