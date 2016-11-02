/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);
  for (var potentialDivisor = smaller; potentialDivisor >= 2; potentialDivisor--) {
    if ((bigger % potentialDivisor === 0) &&
      (smaller % potentialDivisor === 0)) return potentialDivisor;
  }
  return 1;
}

module.exports = gcd;
