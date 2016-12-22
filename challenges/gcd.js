/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const min = Math.min(a, b);		
  const max = Math.max(a, b);
  
  if (max%min === 0) { return min; }
	
  let commonDivisor = Math.floor(min / 2 )
  while(a%commonDivisor || b%commonDivisor) { commonDivisor-- }
  return commonDivisor;
}


module.exports = gcd;