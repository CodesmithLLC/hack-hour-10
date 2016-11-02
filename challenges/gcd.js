/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(a === undefined || b === undefined) return;
  let grcodi = 1;
  let smaller = Math.abs(a) > Math.abs(b) ? Math.abs(b) : Math.abs(a);
  for( let i = 2; i <= smaller; i++ ){
    if(a%i === 0 && b%i === 0) {
      grcodi = i;
    }
  }
  return grcodi;
}


module.exports = gcd;