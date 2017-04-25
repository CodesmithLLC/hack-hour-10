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
	return Object.keys(str.split('').reduce((acc, char) => {
		if (acc.hasOwnProperty(char)) delete acc[char];
		else acc[char] = true;
		return acc;
	}, {})).length < 2;
}

module.exports = permPalin;
