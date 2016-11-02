/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // We know that the gcd can only go up to the lowest value so
  // we can start from that number and see its common
  // denominators and then check if that number if a denominator
  // of the max. If so, we can simply return that number
  // O - linear
  // omega - constant
  // theta - logarithmic

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i >= 1; i--) {
    if (min % i === 0 && max % i === 0) return i;
  }
}

module.exports = gcd;