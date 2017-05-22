/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const num = Math.min(a, b);
  for (let i = num; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) return i;
  }
}
gcd(100, 80);
module.exports = gcd;
