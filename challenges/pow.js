/* Ahmad's implementation of a power function.
 * @param {int} base - exponential base
 * @param {int} power - exponent
 * @return {int} result - final result
 */

function pow(base, power) {
  // validate input
  if (isNaN(base) || isNaN(power) || base === undefined || power === undefined) return undefined;
  // check for edge cases
  if (base === 0) return 0;
  // check for  base case to end recursion
  if (power === 0) return 1;
  // recursive call
  return base * pow(base, power - 1);
}

// un-comment the following line to run from the CLI
console.log(pow(process.argv[2], process.argv[3]));

module.exports = pow;
