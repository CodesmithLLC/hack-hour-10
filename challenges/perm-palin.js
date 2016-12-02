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
	if (str.length === 1) return true;
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = 1;
		} else {
			obj[str[i]]++;
		}
	}
	let arr1 = [];
	let arr2 = [];
	for (let key in obj) {
		if (obj[key] === 1) {
			arr1.push(obj[key]);
			delete obj[key];
		} else {
			arr2.push(obj[key]);
		}
	}
	const bool = !!array2.reduce(function(a, b){ return (a === b) ? a : NaN; })
	console.log(arr1.length)
	console.log(bool);
	//(arr1.length === 1 && bool);
}

module.exports = permPalin;

permPalin('abcab');
