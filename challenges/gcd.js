/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // let dividend = Math.max(a, b);
  // let divisor = Math.min(a, b);
  if (!b) return a;
  return gcd(b, a % b);
}

module.exports = gcd;