/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcdBruteForce(a, b) {
  let arrA = [];
  let arrB = [];
  for (let i = 0; i < a; i++) {
    if (a % i === 0) arrA.push(i);
  }
  for (let i = 0; i < b; i++) {
    if (b % i === 0) arrB.push(i);
  }
  arrA = arrA.sort((a, b) => b - a);

  for (let i = 0; i < arrA.length; i++) {
    if (arrB.includes(arrA[i])) return arrA[i];
  }

  return false;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}


module.exports = gcd;