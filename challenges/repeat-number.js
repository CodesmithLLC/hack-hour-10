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
  while(array.length) {
		let num = array.pop();
		if (array.indexOf(num) !== -1) {
			return num;
		}
	}
}

module.exports = repeatNumbers;
