/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	let obj = {};
	for (let i = 0; i < array.length; i++) {
		if (!obj[array[i]]) {
			obj[array[i]] = 1;
		} else {
			obj[array[i]]++;
		}
	}
	for (let key in obj) {
		if (obj[key] === 2) {
			return key;
		}
	}
	return undefined;
}

module.exports = repeatNumbers;


console.log(repeatNumbers([1,2,3,4,5,6,6]));
