/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  const lesser = a < b ? a : b;
  const greater = a > b ? a : b;
  for (let i = lesser; i >= 0; i--) {
    if (lesser % i === 0 && greater % i === 0) {
      return i;
    }
  }
}

// console.log(gcd(10, 8));
// console.log(gcd(10, 9));
// console.log(gcd('10', 9));

module.exports = gcd;