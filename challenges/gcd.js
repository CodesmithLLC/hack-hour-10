/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let currDivisible = 1;
  let minArg;
  if (a < b) minArg = a;
  else minArg = b;

  for (let i = 1; i <= minArg; i++) {
    if (a % i === 0 && b % i === 0) {
      if (i > currDivisible) {
        currDivisible = i;
      }
    }
  }

  return currDivisible;

}

// console.log(gcd(10, 8));// -> 2
// console.log(gcd(10, 9));// -> 1
// console.log(gcd(10000, 0));// -> 

module.exports = gcd;