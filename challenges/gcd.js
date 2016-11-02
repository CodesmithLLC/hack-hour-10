/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    for (var i = 2, j = Math.floor(b / i); a % j !== 0; i++ , j = Math.floor(b / i));
    return j;
}

module.exports = gcd;