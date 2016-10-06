/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if(base === 0 && power === 0) return undefined;
    if(power > -1) {
        if(power === 0) return 1;
        else if(power === 1) return base *= 1;
        else return base *= pow(base, power - 1);
        }
    else if(power < 0) {
    	var a = 1/base;
        if(power === -1) return 1/(base *= 1);
        return (a *= pow(base, power + 1));
    }
}

module.exports = pow;
