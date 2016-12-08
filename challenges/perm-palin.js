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
	const letters = {};
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		letters[str[i]] = ++letters[str[i]] || 1;
	}
	for (key in letters) {
		if (key === " ") continue;
		if (letters[key]%2===1){count++}
	}
	if (count > 1) return false;
	return true;
}

module.exports = permPalin;

console.log(permPalin('abcab'));
