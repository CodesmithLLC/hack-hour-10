/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// Euclid is OP
const gcd = (a, b) => b ? gcd(b, a % b) : a;

// function gcd(a, b) {
  
//   // Need minimum value to begin looping through factors
//   const min = Math.min(a, b);
  
//   // A GCD is found when both inputs are divisible by the same number
//   for (let i = min; i > 0; i--) {
      
//     // The first shared factor will be the GCD since we're looping downward!
//     if (a % i === 0 && b % i === 0) return i;
//   }
// }

console.log(gcd(10, 8));
console.log(gcd(10, 9));
console.log(gcd(500, 400));

module.exports = gcd;