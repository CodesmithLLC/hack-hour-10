/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  let divisor = max % min;
  while(divisor !== 0){
    max = min;
    min = divisor;
    divisor = max % min;
  }
  return min;
}

module.exports = gcd;