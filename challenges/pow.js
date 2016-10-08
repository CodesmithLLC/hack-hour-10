/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) return 1;
    if (base === undefined || power === undefined) return 1;
    return base * pow(base, power - 1);
}

//tests
//pow(5, 3) => 125
//pow(2, 0) => 1

module.exports = pow;
