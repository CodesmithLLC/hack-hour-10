/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let exp = base;
    if (power === 0) return 1;
    if (base > 0 && power > 0) {
        exp = base * pow(base, power - 1);
        return exp
    }
}

module.exports = pow;
