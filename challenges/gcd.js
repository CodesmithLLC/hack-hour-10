/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// EUCLID'S ALGORITHM

gcd = (a, b) => b ? gcd(b, a % b) : a;

/*

APPROACH #1

function gcd(a, b) {
if (a / b === 1) {
  return a;
}
	
let divisor = Math.floor(Math.max(a, b) / 2);

for (let i = divisor; i > 0; i--) {
  if (a % i === 0 && b % i === 0) {
  	return i;
  }  
}
return 1;
}

*/

module.exports = gcd;