/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, stopRebase) {
  // This function assumes that power is an integer...

  // Base case is that once power hits 0, then we end with a return of 1
  // because anything to the power of 0 is 1
  if (!power) return 1;

  // We need a way to handle negative powers and positive powers
  // If negative power, flip base
  // also, we run into the issue that base is being reassigned during
  // each iteration so we need to stop it from rebasing after the first
  // call. stopRebase does that
  if (power < 0) {
  	if (!stopRebase) base = 1 / base;
    return base * pow(base, ++power, true);
  }

  return base * pow(base, --power);
}

module.exports = pow;
