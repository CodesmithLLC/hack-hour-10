/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // check for int input
  // console.log(base, isNaN(base), power, isNaN(power));
  if (isNaN(base) || isNaN(power)) return;

  // check for positive power
  if (power < 0) return;

  // establish base cases
  if (power === 0) return 1;
  if (power === 1) return base;
  if (base === 0) return 0; // optimization

  // recursive case
  return base * pow(base, power - 1);
}

module.exports = pow;

// testing

// normal cases
let p = 1;
console.assert(pow(2, p) === Math.pow(2, p));
p++;
console.assert(pow(2, p) === Math.pow(2, p));
p++;
console.assert(pow(2, p) === Math.pow(2, p));

// edge cases
console.assert(pow(2, 0) === Math.pow(2, 0));
console.assert(pow(2, 0) === Math.pow(2, 0));
console.assert(pow(0, 10000) === Math.pow(0, 10000));

// undefined behavior
// negative powers
console.assert(pow(2, -1) === undefined);
console.assert(pow(2, -1) === undefined);
// string input
console.assert(pow('hello', 4) === undefined);
console.assert(pow(4, 'hi') === undefined);
console.assert(pow('hey', 'hi') === undefined);
// array input
console.assert(pow([1, 2], 4) === undefined);
console.assert(pow(4, [1, 2]) === undefined);
console.assert(pow({A: 'B'}, [1, 2]) === undefined);
// object input
console.assert(pow({1: 2}, 4) === undefined);
console.assert(pow(4, {1: 2}) === undefined);
console.assert(pow({A: 'B'}, {1: 2}) === undefined);
// boolean input
// console.log(pow(true, 4) === undefined);
// console.log(pow(2, false) === undefined);
// console.log(pow(true, false) === undefined);

// zero to the zero
console.assert(pow(0, 0) === Math.pow(0, 0));
