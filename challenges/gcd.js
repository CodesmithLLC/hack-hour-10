/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // let result = 0;
  // for (let i = 0; i < Math.max(a, b); i++) {
  //   if (a % i === 0 && b % i === 0) result = i;
  // }
  // return result;
  return !b ? a : gcd(b, a % b);
}

// console.log(gcd(100000000000002, 100000000000004));

module.exports = gcd;