/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbacb') => false
 * 	- permPalin('a') => true
 *
 */
'use strict'

function permPalin(str) {
	if (str.length === 1 ) return true;
	if (str.length === 2 && (str[0] === str[1])) return true;
	if (str.length === 3) return false;

	let counter = 0;
	let matches = 0;

	while (str.length > 0) {
		let first = str[counter];
		let second  = str[counter+1];


		for (let i = 2; i < str.length; i++) {
			if (str[i] === first || str[i] === second ) {
				matches++;
				counter++;
				if (matches === 2) return true;
			} else {
				counter++;
				str.length--;
				permPalin(str.slice(counter));
			}
		}
	}
}
// module.exports = permPalin;
