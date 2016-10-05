/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power >= 0) return power === 0 ? 1 : base * pow(base, power - 1);
  const posPower = power * -1;
  return 1 / (posPower === 0 ? 1 : base * pow(base, posPower - 1));
}

module.exports = pow;
