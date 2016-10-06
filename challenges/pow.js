/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

<<<<<<< HEAD
 function pow(base, power) {
  if (power >= 0) {
    if (power === 0) return 1
    return base * pow(base, power - 1);
  } else {
    if (power === 0) return 1
    return base * pow(base, power + 1);
  }
=======
function pow(base, power) {

>>>>>>> 33477e819bf1057115e3436e0bbe897adb0b2ff8
}

module.exports = pow;
