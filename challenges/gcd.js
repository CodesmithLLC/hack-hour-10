/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const larger = a > b ? a : b;
  const divisors = [];
  for (let i = 0; i < larger; i++) {
    if (a % i === 0 && b % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.pop();
}

console.assert(gcd(10, 8) === 2)
console.assert(gcd(10, 9) === 1)
console.assert(gcd(54, 24) === 6)
console.assert(gcd(210, 45) === 15)

module.exports = gcd;
