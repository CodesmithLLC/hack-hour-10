/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // if (!power) return base;
  if (base === 0) return 0;
  if (base === 0 && power === 0) return undefined;
  return (power === 0) ? 1 : base * pow(base, power - 1);
}

module.exports = pow;

// console.log(pow(4,3));
//
// console.log(4 * 4 * 4);
