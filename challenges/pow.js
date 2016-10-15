/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power = 0) {
if(base === 0) {
    if (power === 0) return undefined;
    else return 0;
}
if (power < 0) return (1 / pow(base, -1 * power));
if(power < 1) return 1;
else return base * pow(base, power - 1);
}

module.exports = pow;
console.log(pow(2, -2));