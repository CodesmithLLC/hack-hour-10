"use strict"
/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow (base, power) {
  if (typeof base !== 'number' || typeof power !== 'number') { return undefined; }
  if (power === 0) {
    return 1;
  }

  function recurse(baseValue, count) {
    if (count === 0) { return 1; }
    return baseValue * recurse(baseValue, count - 1);
  }
  const powered = recurse(base, Math.abs(power));
  return power < 0 ? 1/powered : powered;

}

// console.log(pow(5, 3));
// console.log(pow(-5, 3));
// console.log(pow('5', 3));
// console.log(pow(5, '3'));
// console.log(pow(5, 0));
// console.log(pow(5, -3));

module.exports = pow;