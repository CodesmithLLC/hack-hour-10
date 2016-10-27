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
	let strArr = str.toLowerCase().split("");
	let result = false;
	function checkPerms(strArr, arr) {
		if (strArr.length === 0) {
			if (arr === arr.reverse()) {
				result = true;
			}
		}
		for (let i = 0; i < strArr.length; i++) {
			let temp = strArr.splice(i, 1);
			arr.push(temp);
			checkPerms(strArr, arr);
			arr.pop();
			strArr.splice(i, 0, temp);
		}
	}
	checkPerms(strArr, []);
	return result;
}

module.exports = permPalin;