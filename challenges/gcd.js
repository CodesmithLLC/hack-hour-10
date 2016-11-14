/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  var mod = a % b;
  if (!mod) return b;
  else return gcd(b, mod);

}
module.exports = gcd;
