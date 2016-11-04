/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

//  This is the brute force method. 
//  Can also use Euclidian Algorithm to solve recursively.

function gcd(a, b) {
   var div = Math.min(a, b);
   for (var i = div; i > 0; i--) {
     if (a % i === 0 && b % i === 0) return i;
   }
   return 1;
 }

// console.log(gcd(10, 8));// -> 2
// console.log(gcd(10, 9));// -> 1
// console.log(gcd(10000, 25));// -> 

module.exports = gcd;