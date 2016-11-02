/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let divisor = b;
	let remainder = a % b;

	if(remainder === 0) {
		return divisor;
	}
	
	return gcd(divisor, remainder); 

}

module.exports = gcd;